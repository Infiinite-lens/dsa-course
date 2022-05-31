import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <>
        <Link to="/">
          <FontAwesomeIcon icon="house-chimney-crack" />
        </Link>
      </>
      <>
        {/* <FontAwesomeIcon icon="fa-house-chimney" /> */}
        <Link to="/topics">Topics</Link>
      </>
      <>
        {/* <FontAwesomeIcon icon="fa-house-chimney" /> */}
        <Link to="/about">About</Link>
      </>
      <>
        {/* <FontAwesomeIcon icon="fa-house-chimney" /> */}
        <Link to="/contacts">Contacts</Link>
      </>
    </nav>
  );
}

export default Navbar;
