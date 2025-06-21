import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="relative flex flex-col items-center justify-center  bg-cyan-300 p-6 rounded-md shadow-lg"
    >
      {/* Welcome Text */}
      <h3 className="font-bold text-3xl ">Welcome To My Portfolio...</h3>
    </motion.div>
  );
};

export default Welcome;
