import * as React from "react";
import Title from "../common/Title";
import TextImage from "../components/aboutme/TextImage";


const lang = localStorage.getItem("lang");

let title="About Me "; 

if(lang==='es')
{
  title="Sobre Mí "; 
}
const AboutMe = () => {
  return (
    <div id="about">
      <Title title={title} />
      <TextImage />
    </div>
  );
};

export default AboutMe;
