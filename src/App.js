import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Sorting from "./components/pages/topics/individualTopic/Sorting";
import Topics from "./components/pages/topics/Topics";

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/recursion" element={<Sorting />} />
        <Route path="/big'O'" element={<Sorting />} />
        <Route path="/searching" element={<Sorting />} />
        <Route path="/lists" element={<Sorting />} />
        <Route path="/graphs" element={<Sorting />} />
        <Route path="/stacks" element={<Sorting />} />
        <Route path="/queues" element={<Sorting />} />
        <Route path="/tree-traversal" element={<Sorting />} />
        <Route path="/binary-heaps" element={<Sorting />} />
        <Route path="/dijkstra's-algorithm" element={<Sorting />} />
        <Route path="/hash-tables" element={<Sorting />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
