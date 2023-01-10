/** @format */

import { FormValues } from "../../types/checkout";

const createOrderFn = async (values: FormValues) => {
  console.log({ values });
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
  const data = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    status: "pending",
    shipping_total: "20.00",
    billing: {
      first_name: firstName,
      last_name: lastName,
      address_1: address,
      address_2: apartment,
      city: city,
      state: state,
      postcode: postalCode,
      country: "US",
      email: "jasond@gmail.com",
      phone: "8766203976",
    },
    shipping: {
      first_name: firstName,
      last_name: lastName,
      address_1: address,
      address_2: apartment,
      city: city,
      state: state,
      postcode: postalCode,
      country: "US",
    },
    line_items: [
      {
        product_id: 2,
        quantity: 2,
      },
    ],
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "30.00",
      },
    ],
  };

  let resp = await fetch(`/api/preorder`, {
    method: "POST",
    headers: {
      "content-type": "application",
    },
    body: JSON.stringify({
      data: data,
    }),
  });
  const respData = await resp.json();

  // let stringData = respData.resp;
  // let result = stringData.match(/#(\d{4})/);

  return respData;
};

export { createOrderFn };
