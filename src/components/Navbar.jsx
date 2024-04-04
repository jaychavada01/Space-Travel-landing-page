import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavbarStyle.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // Below state is used for navbar hamburger button
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>
          Space<span> Trvl</span>
        </h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/pricing">
            <span>Pricing</span>
          </Link>
        </li>
        <li>
          <Link to="/training">
            <span>Training</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
