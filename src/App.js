import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/pages/Home";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutme/pages/AboutMe"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
