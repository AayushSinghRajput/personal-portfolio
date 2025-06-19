import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 relative w-full">
      <p className="flex p-3 items-center justify-center text-white font-semibold text-sm w-full bg-cyan-300">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved...
      </p>
    </div>
  );
};

export default Footer;
