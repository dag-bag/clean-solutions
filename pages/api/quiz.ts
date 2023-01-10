/** @format */

import { NextApiResponse } from "next";
/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest } from "next";
import connectDb from "../../libs/ConnectDb";
import Quiz from "../../modal/Quiz";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { page1Data, page2Data, page3Data, page4Data } = req.body;

      let newQuizData = new Quiz({
        page1Data,
        page2Data,
        page3Data,
        page4Data,
      });
      let savedQuiz = await newQuizData.save();

      res.status(200).json({
        savedQuiz,

        msg: "Product Created SuccessFully yahhh",
      });
    } catch (error) {
      res.status(400).json({ error: "Quiz Not Saved Properly.", msg: error });
    }
  }

  if (req.method === "GET") {
    // await cors(req, res);
    let products = await Quiz.find();
    res.status(200).json({ products });
  }
  if (req.method === "PUT") {
    let updateProduct = await Quiz.findByIdAndUpdate(req.body.id, req.body);

    // await newProduct.save();
    res.status(200).json({ success: "Products updated Succesfully" });
  }
  if (req.method === "DELETE") {
    let id = req.query.id;
    const deletedProduct = await Quiz.findByIdAndDelete(id);
    // await newProduct.save();
    res
      .status(200)
      .json({ success: true, msg: "Product Deleted Successfully" });
  }
};
export default connectDb(handler);
