import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="nav_list">
        <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
        <li><NavLink to="/webdevs" activeClassName="active">WEBDEVS</NavLink></li>
        <li><NavLink to="/imprint" activeClassName="active">IMPRINT</NavLink></li>
      </ul>
    </>
  );
}
