import {connectDB} from "../../src/lib/db";

export default async function handler(req, res) {
  try {
    await connectDB();
    res.status(200).json({ message: "MongoDB Connected Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Database connection failed", error });
  }
}
