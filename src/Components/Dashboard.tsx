import React from "react";
import home_image from "../assets/home_image.jpg";
const Dashboard = () => {
  return (
    <div class="flex flex-row items-center justify-between p-3 bg-cyan-300">
      <div class="p-2 min-w-[30%] max-w-[50%]">
        <h3 class="font-bold text-xl mb-2 text-green-600">
          <span class="text-red-500">Hi</span> I'm Aayush Singh Rajput
        </h3>
        <p class="font-semibold">
          I'm a passionate{" "}
          <span class="text-red-500">MERN Stack Developer</span> dedicated to
          building responsive, efficient, and user-fridenly web applications.{" "}
          <span class="text-red-500">From</span> crafting sleek frontends with
          React to developing robust backends with{" "}
          <span class="text-red-500">Node.js</span> and{" "}
          <span class="text-red-500">Express</span>, I love turning ideas into
          full-stack solutions. Let's build something amazing together!
        </p>
      </div>
      <div class="max-w-[35%]">
        <img src={home_image} alt="image" class="rounded-lg" />
      </div>
    </div>
  );
};

export default Dashboard;
