import React from "react";
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <h1>Topics</h1>
      <div className={classes.links}>
        <Link to="/contacts">Sorting</Link>
        <Link to="/recursion">Recursion</Link>
        <Link to="/big'O'">Big 'O'</Link>
        <Link to="/searching">Searching</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/graphs">Graphs</Link>
        <Link to="/stacks">Stacks</Link>
        <Link to="/queues">Queues</Link>
        <Link to="/tree-traversal">Tree Traversal</Link>
        <Link to="/dijkstra's-algorithm">Dijkstra's Algorithm</Link>
        <Link to="/binary-heaps">Binary Heaps</Link>
        <Link to="/hash-tables">Hash Tables</Link>
      </div>
    </div>
  );
}

export default Sidebar;
