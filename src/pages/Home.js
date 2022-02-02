import React from 'react'
import CenterHead from "../components/home/CenterHead";
import CenterText from "../components/home/CenterText";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Contact from "./Contact";
import Skills from "./Skills"

const Home = () => {
    return (
    <div id="home"> 
      <CenterHead/>
      <CenterText/>
      <AboutMe/>
      <Skills/>
      <MyWork />
      <Contact />
      </div>
    );
  };
  
  export default Home;
  