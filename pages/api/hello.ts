/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

import requestIp from "request-ip";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let ip = req.connection.remoteAddress;
  console.log(ip);

  res.status(200).json({ name: "Noop", ip: ip });
}
