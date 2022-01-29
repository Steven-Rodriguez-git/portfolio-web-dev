import React from "react";
import "../../styles/SkillBox.css";
import { Typography } from "@mui/material";

const SkillBox = ({name,description,img}) => {
  return (
    <div className="card">
      <div id="card__inner" className="card__inner">
        <div className="card__face card__face--front">
        <img src={img} alt="Languaje_Logo" className="imgFront"></img>
          <Typography variant="h4" style={{color:"#fff"}}>{name}</Typography>
        </div>
        <div className="card__face card__face--back">
          <div className="card__contend">
            <div className="card__header">
              <img src={img} alt="Languaje_Logo" className="imgHeader"></img>
              <Typography variant="body1" className="headText">
                <b>{name}</b>
              </Typography>
            </div>
            <div className="card__body">
              <Typography variant="body1" className="cardBodyText">
                <b>
                {description}
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

const card = document.querySelectorAll('.card__inner');

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach((card) => card.addEventListener("click", flipCard))
}



export default SkillBox;
