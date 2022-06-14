import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? classes["navbar_active"] : classes.navbar}>
      <div className={classes.left}>
        <Link to="/">Home</Link>
      </div>
      <>
        <Link to="/contacts">Contacts</Link>
      </>
      <>
        <Link to="/about">About</Link>
      </>
      <>
        <Link to="/topics" id="topic">
          Topics
        </Link>
      </>
    </nav>
  );
}

export default Navbar;
