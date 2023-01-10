/** @format */

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/paypal";
import paypal from "@paypal/checkout-server-sdk";
const api = new WooCommerceRestApi({
  url: "https://mindscienceshop.com",
  consumerKey: `${process.env.WC_CONSUMER_KEY}`,
  consumerSecret: `${process.env.WC_CONSUMER_SECRET}`,
  queryStringAuth: true, // Force Basic Authentication as query string true and using under HTTPS
  version: "wc/v2",
});

/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        return res.status(400).json({ error: "Invalid" });
      } catch (error) {
        return res.status(400).json({ error: "Some went wrong" });
      }
      break;
    case "POST":
      try {
        const { orderID } = await req.body;

        const PaypalClient = client();
        const request = new paypal.orders.OrdersCaptureRequest(orderID);
        // @ts-ignore
        request.requestBody({});
        const response = await PaypalClient.execute(request);
        if (!response) {
          res.status(500);
        }

        let body = await req.body;
        // let data = await body.data;
        const data = {
          status: "completed",
          set_paid: true,
        };
        let resp = await api
          .put(`orders/${body.woccomerceOrderID}`, data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.response.data);
          });

        return res.json({
          ...response.result,
          data,
          resp,
        });
      } catch (error) {
        return res.status(500).json({ error: error });
      }
      break;

    default:
      break;
  }
}
