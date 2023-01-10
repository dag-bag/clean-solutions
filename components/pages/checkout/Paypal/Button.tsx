/** @format */

import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { createOrderFn } from "../../../../services/checkout/order";
import { FormValues } from "../../../../types/checkout";
import { useRecoilSnapshot, useRecoilState, useSetRecoilState } from "recoil";
import { orderIDAtom } from "../../../../atoms/orderAtom";
import { useRouter } from "next/router";

// This values are the props in the UI
const amount = 2;

const style = {
  layout: "vertical",
  color: "blue",
  label: "checkout",
  shape: "pill",
};
type Props = {
  currency: string;
  showSpinner: boolean;
  disabled: boolean;
  values: FormValues;
};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, disabled, values }: Props) => {
  const router = useRouter();
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [woccomerceOrderID, setWoocomerceOrderId] = useRecoilState(orderIDAtom);
  console.log({ woccomerceOrderID });

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);
  const {
    firstName,
    lastName,
    email,
    address,
    state,
    phone,
    country,
    postalCode,
    city,
    apartment,
    company,
  } = values;
  const PaymentData = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",

    billing: {
      first_name: "John",
      last_name: "Doe",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
      email: "john.doe@example.com",
      phone: "(555) 555-5555",
    },
    shipping: {
      first_name: "John",
      last_name: "Doe",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
    },
    line_items: [
      {
        product_id: 93,
        quantity: 2,
      },
      {
        product_id: 22,
        variation_id: 23,
        quantity: 1,
      },
    ],
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "10.00",
      },
    ],
  };

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          label: "checkout",
          shape: "pill",
        }}
        disabled={disabled}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        className="w-full "
        createOrder={async () => {
          let resp = await fetch(`/api/preorder`, {
            method: "POST",
            headers: {
              "content-type": "application",
            },
            body: JSON.stringify({
              data: PaymentData,
            }),
          });
          const respData = await resp.json();
          console.log(respData);

          setWoocomerceOrderId(respData.resp.id);
          return respData?.orderID;
        }}
        onApprove={async (data, actions) => {
          const resp = await fetch("/api/captureorder", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID,
              woccomerceOrderID,
            }),
          });
          const order = await resp.json();
          console.log(order);

          router.push(`http://localhost:3000/checkout/success`);

          // clearCart();
        }}
      />
    </>
  );
};

export default ButtonWrapper;
