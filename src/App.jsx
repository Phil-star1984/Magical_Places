import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
/* import axios from "axios"; */
import Navbar from "/components/Navbar";
import Home from "/components/Home";
import Footer from "/components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>MAGICAL <br /> PLACES</h1>
      <Navbar />
      <Home />
      {/* <Router>
        <Route path="/" element={<Home />} />
      </Router> */}
      <Footer />
    </>
  );
}

export default App;
