import React from "react";

import classes from "./TopicsList.module.css";

const TopicsList = () => {
  const topics = ["Sorting", "Recursion", "Big O", "Lists", "Queues", "Stacks"];
  return (
    <div>
      <span className={classes.dropdown}>Topics</span>
      <div className={classes["dropdown-content"]}>Dropdown</div>
    </div>
  );
};

export default TopicsList;
