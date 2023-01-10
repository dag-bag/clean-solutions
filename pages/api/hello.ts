/** @format */

/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
// import { BufferEncoding, IncomingForm } from "formidable";
import { serialize, deserialize } from "v8";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "Noop" });
}
// }

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
