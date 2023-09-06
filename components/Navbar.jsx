import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="nav_list">
        <li><Link to="/about" activeClassName="active">ABOUT</Link></li>
        <li><Link to="/webdevs" activeClassName="active">WEBDEVS</Link></li>
        <li><Link to="/imprint" activeClassName="active">IMPRINT</Link></li>
      </ul>
    </>
  );
}
