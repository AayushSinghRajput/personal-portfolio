import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-cyan-300">
      <p className="flex p-3 items-center justify-center text-white font-semibold text-sm">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved...
      </p>
    </footer>
  );
};

export default Footer;
