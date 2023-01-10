/** @format */

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Formik, Field, Form, FormikProps } from "formik";
import FormikInput from "../../Inputs/FormikInput";
import Link from "next/link";
import Terms from "./Terms";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../../../atoms/Cart";
import { createOrderFn } from "../../../services/checkout/order";
import { FormValues } from "../../../types/checkout";
import { Country, State, City } from "country-state-city";
import { checkoutSchema } from "../../../FormikSchemas/checkout";
import { classNames } from "../../../libs/classNames";

const deliveryMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4–10 business days",
    price: "$5.00",
  },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: "$16.00" },
];
const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];

export default function CheckoutComponent() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  const cartItems = useRecoilValue(cartAtom);

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            address: "",
            apartment: "",
            city: "",
            country: "US",
            state: "",
            postalCode: "",
            phone: 0,
            terms: false,
            isoCode: "",
          }}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            createOrderFn(values);
            // console.log(values);
          }}
          validationSchema={checkoutSchema}
        >
          {(props: FormikProps<FormValues>) => {
            const {
              errors,
              touched,
              isSubmitting,
              isValid,
              initialErrors,
              isValidating,
              values,
              setValues,
              setFieldValue,
            } = props;
            const countries = Country.getAllCountries();
            const states = State.getStatesOfCountry(values?.country);
            const cities = City.getCitiesOfState(values.country, values.state);

            return (
              <Form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                <div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      Contact information
                    </h2>

                    <div className="mt-4">
                      <FormikInput
                        label="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        error={errors.email}
                        touched={touched.email}
                      />
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                      Shipping information
                    </h2>
                    {/* Main Info */}
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <FormikInput
                        label="First Name"
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        error={errors.firstName}
                        touched={touched.firstName}
                      />

                      <FormikInput
                        label="Last Name"
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        error={errors.lastName}
                        touched={touched.lastName}
                      />

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company (Optional)
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="company"
                            id="company"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <FormikInput
                          label="Address"
                          type="text"
                          name="address"
                          id="address"
                          autoComplete="street-address"
                          error={errors.address}
                          touched={touched.address}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="apartment"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Apartment, suite, etc.(Optional)
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="apartment"
                            id="apartment"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="country"
                          className="flex justify-between text-sm font-medium text-gray-700"
                        >
                          <span>Country</span>
                          <span className="text-error ">
                            {errors.country && touched.country
                              ? errors.country
                              : null}
                            *
                          </span>
                        </label>
                        <div className="mt-1">
                          <Field
                            component="select"
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm ${
                              errors.country
                                ? "border-error focus:border-error focus:ring-error"
                                : "focus:border-blue-1 focus:ring-blue-1 "
                            }`}
                          >
                            {countries.map((i, index) => {
                              return (
                                <option key={i.isoCode} value={i.isoCode}>
                                  {i.name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="flex justify-between text-sm font-medium text-gray-700"
                        >
                          <span>State</span>
                          <span className="text-error ">
                            {errors.state && touched.state
                              ? errors.state
                              : null}
                            *
                          </span>
                        </label>
                        <div className="mt-1">
                          <Field
                            component="select"
                            id="state"
                            name="state"
                            autoComplete="state-name"
                            className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm ${
                              errors.state
                                ? "border-error focus:border-error focus:ring-error"
                                : "focus:border-blue-1 focus:ring-blue-1 "
                            }`}
                          >
                            {states.map((i, index) => {
                              return (
                                <option key={i.isoCode} value={i.isoCode}>
                                  {i.name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="flex justify-between text-sm font-medium text-gray-700"
                        >
                          <span>City</span>
                          <span className="text-error ">
                            {errors.city && touched.city ? errors.city : null}*
                          </span>
                        </label>
                        <div className="mt-1">
                          <Field
                            component="select"
                            id="city"
                            name="city"
                            autoComplete="city-name"
                            className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm ${
                              errors.city
                                ? "border-error focus:border-error focus:ring-error"
                                : "focus:border-blue-1 focus:ring-blue-1 "
                            }`}
                          >
                            {cities?.map((i, index) => {
                              return (
                                <option key={i.name} value={i.name}>
                                  {i.name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                      </div>

                      <FormikInput
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        autoComplete="postal-code"
                        error={errors.postalCode}
                        touched={touched.postalCode}
                        label="Postal Code"
                      />

                      <div className="sm:col-span-2">
                        <FormikInput
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          error={errors.phone}
                          touched={touched.phone}
                          label="Phone Number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <RadioGroup
                      value={selectedDeliveryMethod}
                      onChange={setSelectedDeliveryMethod}
                    >
                      <RadioGroup.Label className="text-lg font-medium text-gray-900">
                        Delivery method
                      </RadioGroup.Label>

                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        {deliveryMethods.map((deliveryMethod) => (
                          <RadioGroup.Option
                            key={deliveryMethod.id}
                            value={deliveryMethod}
                            className={({ checked, active }) =>
                              classNames(
                                checked
                                  ? "border-transparent"
                                  : "border-gray-300",
                                active ? "ring-2 ring-blue-1" : "",
                                "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            {({ checked, active }) => (
                              <>
                                <div className="flex-1 flex">
                                  <div className="flex flex-col">
                                    <RadioGroup.Label
                                      as="span"
                                      className="block text-sm font-medium text-gray-900"
                                    >
                                      {deliveryMethod.title}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="span"
                                      className="mt-1 flex items-center text-sm text-gray-500"
                                    >
                                      {deliveryMethod.turnaround}
                                    </RadioGroup.Description>
                                    <RadioGroup.Description
                                      as="span"
                                      className="mt-6 text-sm font-medium text-gray-900"
                                    >
                                      {deliveryMethod.price}
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                                {checked ? (
                                  <CheckCircleIcon
                                    className="h-5 w-5 text-green-1"
                                    aria-hidden="true"
                                  />
                                ) : null}
                                <div
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-blue-1"
                                      : "border-transparent",
                                    "absolute -inset-px rounded-lg pointer-events-none"
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Payment */}
                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h2 className="text-lg font-medium text-gray-900">
                      Payment
                    </h2>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Payment type</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {paymentMethods.map(
                          (paymentMethod, paymentMethodIdx) => (
                            <div
                              key={paymentMethod.id}
                              className="flex items-center"
                            >
                              {paymentMethodIdx === 0 ? (
                                <input
                                  id={paymentMethod.id}
                                  name="payment-type"
                                  type="radio"
                                  defaultChecked
                                  className="focus:ring-blue-1 h-4 w-4 text-green-1 border-gray-300"
                                />
                              ) : (
                                <input
                                  id={paymentMethod.id}
                                  name="payment-type"
                                  type="radio"
                                  className="focus:ring-blue-1 h-4 w-4 text-green-1 border-gray-300"
                                />
                              )}

                              <label
                                htmlFor={paymentMethod.id}
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                {paymentMethod.title}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </fieldset>

                    <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                      <div className="col-span-4">
                        <label
                          htmlFor="card-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Card number
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="card-number"
                            name="card-number"
                            autoComplete="cc-number"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="col-span-4">
                        <label
                          htmlFor="name-on-card"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name on card
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="name-on-card"
                            name="name-on-card"
                            autoComplete="cc-name"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="col-span-3">
                        <label
                          htmlFor="expiration-date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expiration date (MM/YY)
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="expiration-date"
                            id="expiration-date"
                            autoComplete="cc-exp"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="cvc"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CVC
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="cvc"
                            id="cvc"
                            autoComplete="csc"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-1 focus:border-blue-1 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order summary */}
                <div className="mt-10 lg:mt-0">
                  <h2 className="text-lg font-medium text-gray-900">
                    Order summary
                  </h2>

                  <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="sr-only">Items in your cart</h3>
                    <ul role="list" className="divide-y divide-gray-200">
                      {cartItems.map((product) => (
                        <li key={product.id} className="flex py-6 px-4 sm:px-6">
                          <div className="flex-shrink-0 relative">
                            <Image
                              width={100}
                              height={100}
                              layout="intrinsic"
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="w-20 rounded-md"
                            />
                          </div>

                          <div className="ml-6 flex-1 flex flex-col">
                            <div className="flex">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm">
                                  <a
                                    href={product.href}
                                    className="font-medium text-gray-700 hover:text-gray-800"
                                  >
                                    {product.title}
                                  </a>
                                </h4>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.category}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.size}
                                </p>
                              </div>

                              <div className="ml-4 flex-shrink-0 flow-root">
                                <button
                                  type="button"
                                  className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Remove</span>
                                  <TrashIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>

                            <div className="flex-1 pt-2 flex items-end justify-between">
                              <p className="mt-1 text-sm font-medium text-gray-900">
                                {product.price}
                              </p>

                              <div className="ml-4">
                                <label htmlFor="quantity" className="sr-only">
                                  Quantity
                                </label>
                                <select
                                  id="quantity"
                                  name="quantity"
                                  className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-1 focus:border-blue-1 sm:text-sm"
                                >
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                  <option value={8}>8</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <dt className="text-sm">Subtotal</dt>
                        <dd className="text-sm font-medium text-gray-900">
                          $64.00
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-sm">Shipping</dt>
                        <dd className="text-sm font-medium text-gray-900">
                          $5.00
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-sm">Taxes</dt>
                        <dd className="text-sm font-medium text-gray-900">
                          $5.52
                        </dd>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <dt className="text-base font-medium">Total</dt>
                        <dd className="text-base font-medium text-gray-900">
                          $75.52
                        </dd>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <dd className="text-base font-medium text-gray-900">
                          <p>
                            Your personal data will be used to process your
                            order, support your experience throughout this
                            website, and for other purposes described in our
                            <Link
                              href={
                                "https://cleansolutions.tech/privacy-policy-2/"
                              }
                            >
                              <a
                                target={"_blank"}
                                className="ml-2 underline text-blue-1 cursor-pointer"
                              >
                                privacy policy.
                              </a>
                            </Link>
                          </p>
                          <div className="flex items-center mt-10">
                            <label
                              htmlFor="remember-me"
                              className="ml-2  text-sm text-gray-900 font-bold "
                            >
                              <Field
                                id="terms"
                                name="terms"
                                type="checkbox"
                                className="h-4 w-4 text-blue-1 focus:ring-blue-1 border-gray-300 rounded mr-2"
                              />{" "}
                              I have read and agree to the website <Terms />
                            </label>
                          </div>
                        </dd>
                      </div>
                    </dl>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <button
                        disabled={isSubmitting || !isValid || isValidating}
                        type="submit"
                        className="w-full  bg-green-1 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-1 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        Proceed to Paypal.
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
