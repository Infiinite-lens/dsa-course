import React from "react";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes["hero-page"]}>
      <div className={classes["hero-wrapper"]}>
        <div className={classes.text}>
          <h1>Data Structures</h1>
          <div className={classes.and}>and</div>
          <h1>Algorithms</h1>
          <div className={classes.and}>by</div>
          <div className={classes.name}>
            <h2>Lens William</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
