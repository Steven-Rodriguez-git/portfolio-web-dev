import React from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./common/navbar/NavBar";
import Footer from "./common/footer/Footer";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe/>
      <Skills/>
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
