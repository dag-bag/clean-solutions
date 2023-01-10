/** @format */
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { FormValues } from "../../../../types/checkout";
import ButtonWrapper from "./Button";
export default function PaypalComponent({
  disabled,
  values,
}: {
  disabled: boolean;
  values: FormValues;
}) {
  const currency = "USD";
  return (
    <div className="w-full flex justify-start items-center  my-10">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AW-Rqcy0-qP3joerQi8eaeIpkaN9wXS7iFW269cFreGitQd5MXAnIOaETSsEzIecn_l2dejjbyI0L3Zz",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          values={values}
          currency={currency}
          showSpinner={false}
          disabled={disabled}
        />
      </PayPalScriptProvider>
    </div>
  );
}
