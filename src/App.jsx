import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
/* import axios from "axios"; */
import Navbar from "/components/Navbar";
import Home from "/components/Home";
import Footer from "/components/Footer.jsx";
import Test from "/components/Test.jsx";
import About from "/components/About.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a className="logo" href="/">
        <h1>
          MAGICAL <br /> PLACES
        </h1>
      </a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdevs" element={<Test />} />
        <Route path="/imprint" element={<Test />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
