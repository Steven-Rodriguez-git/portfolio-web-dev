import React, { useState } from "react";
import "./SkillBox.css";
import { Typography } from "@mui/material";
import SpringLogo from "../img/spring-framework-icon.svg";
import JavaLogo from "../img/java-icon.svg"
const SkillBox = () => {
  return (
    <div className="card">
      <div id="card__inner" className="card__inner">
        <div className="card__face card__face--front">
          <Typography variant="h4" style={{color:"#fff"}}>Java</Typography>
          <img src={JavaLogo} alt="" className="img"></img>
        </div>
        <div className="card__face card__face--back">
          <div className="card__contend">
            <div className="card__header">
              <img src={SpringLogo} alt="" className="imgHeader"></img>
              <Typography variant="body1" className="headText">
                <b>Spring boot.</b>
              </Typography>
            </div>
            <div className="card__body">
              <Typography variant="body1" className="cardBodyText">
                <b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </b>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.onload = function(){

  const card = document.querySelector('.card__inner');

card.addEventListener('click', function(){
 card.classList.toggle('is-flipped');
})
}



export default SkillBox;
