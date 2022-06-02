import React from "react";
import Sidebar from "./sections/Sidebar";
import TopicContent from "./sections/TopicContent";

import classes from "./Topics.module.css";

function Topics() {
  return (
    <div className={classes.topics}>
      {/* Sidebar component */}
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      {/* Each topic component */}
      <div className={classes.content}>
        <TopicContent />
      </div>
    </div>
  );
}

export default Topics;
