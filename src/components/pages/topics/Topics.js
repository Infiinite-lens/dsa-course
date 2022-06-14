import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Contacts";
import Sorting from "./individualTopic/Sorting";
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
        <div className={classes.title}>
          <h1>Topic Title</h1>
        </div>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts" element={<Sorting />} />
        </Routes>
      </div>
    </div>
  );
}

export default Topics;
