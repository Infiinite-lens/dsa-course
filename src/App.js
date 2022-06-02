import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Topics from "./components/pages/topics/Topics";

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="topics" element={<Topics />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
