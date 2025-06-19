import { Request, Response } from "express";
import Contact from "../models/Contact";
export const submitContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }
    const newContact = await Contact.create({ name, email, message });
    res
      .status(201)
      .json({ message: "Message submitted successfully.", data: newContact });
  } catch (error) {
    res.status(500).json({ error: "Server Error..." });
  }
};
