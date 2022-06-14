import React from "react";

import classes from "./TopicContent.module.css";

function TopicContent(props) {
  return (
    <div>
      <div className={classes["topic-content"]}>
        <div className={classes.wrapper}>
          {props.introText}
          <div className={classes.container}>
            <div className={classes.left}>
              <div className={classes.pseudo}>
                <h2>Pseudo Code</h2>
                {props.pseudoCode}
              </div>
              <div className={classes.snippet}>
                <h2>Code Snippet</h2>
                {props.codeSnippet}
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.explanation}>
                <h2>Code Explanation</h2>
                {props.codeExplanation}
              </div>
              <div className={classes.table}>
                <h1>Big'O' Table</h1>
                {props.table}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicContent;
