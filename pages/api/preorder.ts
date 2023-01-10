/** @format */

import client from "../../libs/paypal";

import paypal from "@paypal/checkout-server-sdk";

import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../libs/WooCommerceApi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
  //This code creates an order. It is not used in this project.
  // const request = new paypal.orders.OrdersCreateRequest();
  // request.prefer("return=representation");

  if (req.method === "POST") {
    try {
      const PaypalClient = client();
      //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
      const request = new paypal.orders.OrdersCreateRequest();
      // @ts-ignore
      request.headers["prefer"] = "return=representation";
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "100.00",
            },
          },
        ],
      });
      const response = await PaypalClient.execute(request);
      if (response.statusCode !== 201) {
        res.status(500);
      }
      let { data } = await JSON.parse(req.body);
      // console.log(body);

      let resp = await api
        .post("orders", data)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      return res.json({ orderID: response.result.id, resp });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(500).json({ message: "Invalid request method" });
  }
}
// export default connectDb(handler);
