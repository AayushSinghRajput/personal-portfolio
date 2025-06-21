import React, { useState, useEffect } from "react";
import Dashboard from "../Components/Dashboard.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Projects from "./Projects.tsx";
import Welcome from "../Components/Welcome.tsx";
import { AnimatePresence } from "framer-motion";
const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  if (process.env.NODE_ENV === "development") {
    localStorage.removeItem("hasVisited");
  }
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem("hasVisited", "true");
      //hide the banner after 2 seconds
      setTimeout(() => {
        setShowWelcome(false);
      }, 2000);
    }
  }, []);
  return (
    <div className=" flex  flex-col">
      <AnimatePresence>
        {showWelcome && (
          <div className="fixed top-[50%] left-0 right-0 z-50 bg-cyan-200  p-4 shadow-md animate-bounce">
            <Welcome />
          </div>
        )}
      </AnimatePresence>
      <Dashboard />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
