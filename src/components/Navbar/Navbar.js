import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import TopicsList from "./TopicsList";

function Navbar() {
  return (
    <nav className={classes.navbar}>
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
          <TopicsList />
        </Link>
      </>
    </nav>
  );
}

export default Navbar;
