import React from "react";

import classes from "./TopicContent.module.css";

function TopicContent() {
  return (
    <div className={classes["topic-content"]}>
      <h1>Topic Title</h1>
      <div className={classes.wrapper}>
        <p>
          Introductory Message....
          <br /> Introductory message
          .............######################################
          ######################################################
          ############################
          <br />
          ............. ######################################
          ######################################################
          ############################
          <br />
          ............. ######################################
          ######################################################
          ############################
          <br />
          ............. ######################################
          ######################################################
          ############################
        </p>
        <div>Code Snippet and Pseudocode</div>
        <div>Code explanation and Big'O' Table</div>
      </div>
    </div>
  );
}

export default TopicContent;
