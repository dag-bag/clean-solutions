/** @format */

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import type { NextApiRequest, NextApiResponse } from "next";
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
        let data = await api
          .get("products", {
            per_page: 10,
          })
          .then((response) => {
            console.log(response.data);
            return response.data;
          })
          .catch((error) => {
            console.log(error);
            return error.response.data;
          });

        return res.status(200).json({ name: "Noop", data });
      } catch (error) {
        return res.status(400).json({ error: "Some went wrong" });
      }
      break;
    case "POST":
      try {
        let body = JSON.parse(req.body);
        let data = await body["data"];
        let resp = await api
          .post("orders", data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.response.data);
          });

        return res.json({
          data,
          status: "working",
          resp,
        });
      } catch (error) {
        return res.status(500).json({ error: error });
      }

    default:
      break;
  }
}
