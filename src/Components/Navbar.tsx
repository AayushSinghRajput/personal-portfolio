import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  items-center justify-between p-3 bg-cyan-200">
      <div>
        <p className="text-pink-400 font-bold text-3xl">MERN Stack Developer</p>
      </div>
      <div className="mr-10">
        <ul className="flex flex-row items-center justify-between gap-7 text-red-500 font-bold text-md cursor-pointer">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/projects")}>Projects</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
