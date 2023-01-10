/** @format */

import { Field } from "formik";
import React from "react";
import FormikInput from "../../Inputs/FormikInput";
import DeliveryOption from "./DeliveryOption";
import { ICity, ICountry, IState } from "country-state-city";
import { FormikErrors, FormikTouched } from "formik";
import { FormValues } from "../../../types/checkout";

type Props = {
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  countries: ICountry[];
  cities: ICity[];
  states: IState[];
};

function CheckoutForm({ errors, touched, countries, cities, states }: Props) {
  return (
    <div>
      {" "}
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
      {/* Main Info */}
      <div className="mt-10 border-t border-gray-200 pt-10">
        <h2 className="text-lg font-medium text-gray-900">
          Shipping information
        </h2>
        {/* Real Data IMPORTANT PART */}
        {/* TODO:fIX THE RENDERING OF THE PAYPAL CREATE A SUB COMPONENT FOR CHECKING THE BUGS */}
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
          {/* Company Info */}
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
          {/*  Addresss*/}
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
          {/* About Country State City  */}
          <div>
            <label
              htmlFor="country"
              className="flex justify-between text-sm font-medium text-gray-700"
            >
              <span>Country</span>
              <span className="text-error ">
                {errors.country && touched.country ? errors.country : null}*
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
                {errors.state && touched.state ? errors.state : null}*
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
          {/* End of the Country State City  */}
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
          {/*  */}
        </div>
      </div>
      {/* Delivery Options or Payment Process */}
      <DeliveryOption />
    </div>
  );
}

export default CheckoutForm;
