/** @format */

import mongoose from "mongoose";
let uri: string = process.env.MONGO!;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
const connectDb = (handler: any) => async (req: any, res: any) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(uri);
  return handler(req, res);
};
export default connectDb;
