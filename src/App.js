import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./common/navbar/NavBar";
import Footer from "./common/footer/Footer";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact"

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/mywork" element={<MyWork/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
