import React from "react";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./common/navbar/NavBar";
import SimpleNavBar from "./common/navbar/SimpleNavBar";
import Footer from "./common/footer/Footer";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactForm/ContactPage";
import Curriculum from "./pages/ContactForm/Curriculum";
import CreatePage from "./pages/ContactForm/CreatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<SimpleNavBar />}>
          <Route path="contact" element={<ContactPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="curriculum" element={<Curriculum />} />
        </Route>
        
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
