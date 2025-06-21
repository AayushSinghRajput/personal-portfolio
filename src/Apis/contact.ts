import axios from "axios";
import { ContactData } from "../types";

const BACKEND_URL = process.env.REACT_BACKEND_URL;

export const contactApi = async (contactData: ContactData) => {
  const response = await axios.post(
    "http://localhost:5001/api/contact/submit",
    contactData
  );
  return response;
};
