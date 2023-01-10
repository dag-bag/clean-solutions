/** @format */

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
  url: "https://mindscienceshop.com",
  consumerKey: `${process.env.WC_CONSUMER_KEY}`,
  consumerSecret: `${process.env.WC_CONSUMER_SECRET}`,
  queryStringAuth: true, // Force Basic Authentication as query string true and using under HTTPS
  version: "wc/v2",
});
