import React from "react";
import Navbar from "./Components/Navbar.tsx";
import Home from "./Pages/Home.tsx";
import Projects from "./Pages/Projects.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.tsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
