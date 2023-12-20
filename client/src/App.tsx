import React from "react";
import "./scss/global.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import About from "./components/about/about";
import Skills from "./components/skills/Skills";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <ScrollToTop />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
