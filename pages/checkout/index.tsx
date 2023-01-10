/** @format */

import React from "react";
import { Formik, Field, Form, FormikProps, useFormikContext } from "formik";
import { createOrderFn } from "../../services/checkout/order";
import { FormValues } from "../../types/checkout";
import { Country, State, City } from "country-state-city";
import { checkoutSchema } from "../../FormikSchemas/checkout";
import dynamic from "next/dynamic";
const OrderSummary = dynamic(
  () => import("../../components/pages/checkout/OrderSummary"),
  {
    loading: () => <div>Loading...</div>,
  }
);
const CheckoutForm = dynamic(
  () => import("../../components/pages/checkout/CheckoutForm"),
  {
    loading: () => <div>Loading...</div>,
  }
);

import CheckoutLayout from "../../components/pages/layout/CheckoutLayout";

type Props = {};

function Index({}: Props) {
  return (
    <>
      <CheckoutLayout>
        <Formik
          validateOnMount={true}
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
          }}
          validationSchema={checkoutSchema}
        >
          {(props: FormikProps<FormValues>) => {
            const {
              errors,
              touched,
              isSubmitting,
              isValid,

              isValidating,
              values,
            } = props;

            const countries = Country.getAllCountries();
            const states = State.getStatesOfCountry(values.country);
            const cities = City.getCitiesOfState(values.country, values.state);
            return (
              <Form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                <CheckoutForm
                  errors={errors}
                  touched={touched}
                  countries={countries}
                  states={states}
                  cities={cities}
                />
                <OrderSummary
                  isSubmitting={isSubmitting}
                  isValid={isValid}
                  isValidating={isValidating}
                  values={values}
                />
              </Form>
            );
          }}
        </Formik>
      </CheckoutLayout>
    </>
  );
}

export default Index;
