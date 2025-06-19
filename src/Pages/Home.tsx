import React from "react";
import Dashboard from "../Components/Dashboard.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
const Home = () => {
  return (
    <div className="gap-3">
      <Dashboard />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
