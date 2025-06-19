import mongoose, { Document } from "mongoose";

interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}
const contactSchema = new mongoose.Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
