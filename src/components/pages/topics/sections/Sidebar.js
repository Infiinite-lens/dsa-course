import React from "react";
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <h1>Topics</h1>
      <div className={classes.links}>
        <Link to="topics/sorting">Sorting</Link>
        <Link to="topics/recursion">Recursion</Link>
        <Link to="topics/big'O'">Big 'O'</Link>
        <Link to="topics/searching">Searching</Link>
        <Link to="topics/lists">Lists</Link>
        <Link to="topics/graphs">Graphs</Link>
        <Link to="topics/stacks">Stacks</Link>
        <Link to="topics/queues">Queues</Link>
        <Link to="topics/tree-traversal">Tree Traversal</Link>
        <Link to="topics/dijkstra's-algorithm">Dijkstra's Algorithm</Link>
        <Link to="topics/binary-heaps">Binary Heaps</Link>
        <Link to="topics/hash-tables">Hash Tables</Link>
      </div>
    </div>
  );
}

export default Sidebar;
