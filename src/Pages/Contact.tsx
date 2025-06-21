import React, { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { TiMessage } from "react-icons/ti";
import { IoIosCall } from "react-icons/io";
import { toast } from "react-toastify";
import { contactApi } from "../Apis/contact.ts";
import { ContactData } from "../types";

const Contact = () => {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await contactApi(formData);
      toast.success("Message sent successfully...");
      console.log(response.data);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between bg-cyan-600 p-3 w-full gap-2 min-h-screen">
      {/* Left Info */}
      <div className="flex flex-col items-start gap-5 w-1/2">
        <div className="mb-3">
          <h3 className="text-5xl text-white font-bold">
            Let's discuss <br />
            on something <span className="text-pink-600">cool</span> <br />
            together
          </h3>
        </div>
        <div className="gap-10 flex flex-col">
          <div className="flex flex-row items-center justify-center text-white text-2xl gap-2 font-semibold">
            <TiMessage />
            <p>aayushsinghrajput812@gmail.com</p>
          </div>
          <div className="flex flex-row items-center  text-white text-2xl gap-2 font-semibold">
            <IoIosCall />
            <p>+977-9805981168</p>
          </div>
          <div className="flex flex-row items-center  text-white text-2xl gap-2 font-semibold">
            <FaLocationDot />
            <p>Dharan, Sunsari, Nepal</p>
          </div>
        </div>
        <div className="flex flex-row gap-10 text-4xl mt-4">
          <a
            href="https://www.facebook.com/aayush.singh.rajput.36062"
            className="text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/aayush-singh-rajput-7314b7279/"
            className="text-white"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/AayushSinghRajput" className="text-white">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col mr-[70px] w-1/2 bg-white p-8 rounded-lg">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold text-orange-500">Let's Connect</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
            <label htmlFor="name" className="font-semibold">
              Enter your name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="p-2 rounded-md outline-none border-2 border-cyan-400"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="font-semibold">
              Enter your email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="p-2 rounded-md outline-none border-2 border-cyan-400"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="message" className="font-semibold">
              Enter your message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className="p-2 rounded-md outline-none border-2 border-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg cursor-pointer w-[220px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
