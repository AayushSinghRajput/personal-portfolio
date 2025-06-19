import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const About = () => {
  return (
    <div className="flex flex-col p-2 bg-cyan-200">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-3xl mb-3 text-amber-600">Personal Bio</h3>
        <p className="font-semibold text-center">
          Hey there! I'm{" "}
          <strong className="text-green-600">Aayush Singh Rajput</strong>, a
          dedicated <span className="text-red-500">MERN</span> Stack Developer
          based in Dharan, Nepal. I specialize in creating dynamic,
          high-performing web applications using MongoDB, Express.js, React, and
          Node.js.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 p-2">
        <div className="mt-2 flex flex-col">
          <h3 className="text-2xl mb-3 font-bold text-orange-400">
            Background
          </h3>
          <p className="font-semibold text-orange-600">
            My journey into web development began with a curiosity for how
            websites work, which quickly turned into a passion. Over time, I've
            honed my skills by building real-world projects, exploring new
            technologies, and continuously learning to stay ahead in this
            ever-evolving field.
          </p>
        </div>

        <div className="mt-2 flex flex-col">
          <h3 className="text-2xl mb-3 font-bold text-pink-500">
            Skills & Tools
          </h3>
          <p className="font-semibold text-pink-600">
            I work comfortably across the full stack and enjoy crafting seamless
            user experiences. Here are some of the technologies I work with:
          </p>
          <ul>
            <li className="flex flex-row items-center mb-2 gap-3 flex-wrap cursor-pointer">
              <strong className="text-pink-600">Frontend:</strong>
              <FaReact className="text-cyan-600 text-2xl" />
              <RiNextjsFill className="text-black text-2xl" />
              <FaHtml5 className="text-blue-500 text-2xl" />
              <FaCss3 className="text-cyan-400 text-2xl" />
              <FaJsSquare className="text-yellow-600 text-2xl" />
              <RiTailwindCssFill className="text-blue-600 text-2xl" />
              <FaBootstrap className="text-purple-600 text-2xl" />
            </li>
            <li className="flex flex-row items-center mb-2 gap-3 flex-wrap cursor-pointer">
              <strong className="text-pink-600">Backend:</strong>
              <FaNodeJs className="text-green-700 text-2xl" />
              <SiExpress className="text-gray-800 text-2xl" />
            </li>
            <li className="flex flex-row items-center mb-2 gap-3 flex-wrap cursor-pointer">
              <strong className="text-pink-600">Database:</strong>
              <DiMongodb className="text-green-500 text-2xl" />
            </li>
            <li className="flex flex-row items-center mb-2 gap-3 flex-wrap cursor-pointer">
              <strong className="text-pink-600">Others:</strong>
              <FaGitAlt className="text-orange-600 text-2xl" />
              <FaGithub className="text-black text-2xl" />
              <FaFigma className="text-purple-500 text-2xl" />
              <SiPostman className="text-yellow-500 text-2xl" />
            </li>
          </ul>
        </div>

        <div className="mt-2 flex flex-col">
          <h3 className="text-2xl mb-3 font-bold text-green-600">Mission</h3>
          <p className="font-semibold text-green-500">
            My mission is to build impactful web solutions that solve real-world
            problems. Whether it's a startup idea, a business platform, or a
            personal tool, I aim to develop scalable and maintainable
            applications that deliver value.
          </p>
        </div>

        <div className="mt-2 flex flex-col">
          <h3 className="text-2xl mb-3 font-bold text-purple-600">
            Personality
          </h3>
          <p className="font-semibold text-purple-500">
            When I'm not coding, you’ll find me exploring new tech trends,
            designing in Figma, or enjoying a good cup of coffee while
            brainstorming my next big idea.
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center">
        <p className="font-semibold">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to{" "}
          <a
            href="/contact"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Get in touch !
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
