import type { NextApiRequest, NextApiResponse } from "next";
import { GetAllBlogs } from "../../services/blogs";
("woietrpnrcnabnug");
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ posts: await GetAllBlogs() });
}   