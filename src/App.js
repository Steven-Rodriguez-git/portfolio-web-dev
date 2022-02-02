import React from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./common/navbar/NavBar";
import Footer from "./common/footer/Footer";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactForm/ContactPage";
import Curriculum from "./pages/ContactForm/Curriculum";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="curriculum" element={<Curriculum/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
