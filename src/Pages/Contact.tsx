import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TiMessage } from "react-icons/ti";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/api/contact/submit",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data) {
      toast.success("Message Sent Successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message.");
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-row items-center justify-between bg-cyan-600 p-3 w-full gap-2">
      <div className="flex flex-col items-start gap-5 w-1/2">
        <div className="mb-3">
          <h3 className="text-5xl text-white font-bold">
            Let's discuss <br />
            on something <span className="text-pink-600">cool</span> <br />
            together
          </h3>
        </div>
        <div className="gap-10 flex flex-col">
          <p className="text-white text-2xl items-center  flex flex-row gap-2  font-semibold">
            {" "}
            <TiMessage />
            aayushsinghrajput812@gmail.com
          </p>
          <p className="text-white text-2xl items-center flex flex-row gap-2 font-semibold">
            {" "}
            <IoIosCall />
            +977-9805981168
          </p>
          <p className="text-white text-2xl items-center flex flex-row gap-2 font-semibold">
            {" "}
            <FaLocationDot />
            Dharan,Sunsari,Nepal
          </p>
        </div>
        <div className="flex flex-row gap-10 text-4xl mt-4">
          <a
            href="https://www.facebook.com/aayush.singh.rajput.36062"
            className="text-white cursor-pointer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/aayush-singh-rajput-7314b7279/"
            className="text-white cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AayushSinghRajput"
            className="text-white cursor-pointer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="flex flex-col mr-[70px] w-1/2 bg-white p-8 rounded-lg">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold text-orange-500">Let's Connect</h2>
        </div>
        <form action="post" onSubmit={handleSubmit}>
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
              type="text"
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
