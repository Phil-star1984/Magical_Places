import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
/* import axios from "axios"; */
import Navbar from "/components/Navbar";
import Home from "/components/Home";
import Footer from "/components/Footer.jsx";
import About from "/components/About.jsx";
import SinglePlace from "/components/SinglePlace.jsx";
import BlogDetails from "/components/BlogDetails.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>
        <a id="logo" href="/">
          MAGICAL <br /> PLACES
        </a>
      </h1> */}

      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdevs" element={<About />} />
        <Route path="/imprint" element={<About />} />
        <Route path="/place/:id" element={<SinglePlace />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        {/* <Route path="/details/:id" element={<Details />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
