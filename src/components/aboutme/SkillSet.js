import React from "react";
import "../../styles/SkillSet.css";
import { Typography } from "@mui/material";
import SkillBox from "./SkillBox";
import Grid from "@mui/material/Grid";
import SkillsEn from "../../data/skillsEn.json";
import SkillsEs from "../../data/skillsEs.json"

const lang = localStorage.getItem("lang");

let SkillLang = () => {
  return(
    <Grid
    container
    direction="row"
    justify="space-around"
    alignItems="center"
    spacing={3}
  >
    {SkillsEn.map((skill) => {
      return (
        <Grid item xs key={skill.id}>
          <SkillBox name={skill.name} description={skill.description} img={skill.img}/>
        </Grid>
      );
    })}
  </Grid>
  );

}

let title=" Skill Sets"

if(lang==='es')
{
  SkillLang = () => {
    return(
      <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      spacing={3}
    >
      {SkillsEs.map((skill) => {
        return (
          <Grid item xs key={skill.id}>
            <SkillBox name={skill.name} description={skill.description} img={skill.img}/>
          </Grid>
        );
      })}
    </Grid>
    );

}
    title=" Habilidades"
}



const SkillSet = () => {
  return (
    <React.Fragment>
      <Grid
        className="skillBack"
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs >
          <Typography variant="h3" style={{ color: "#fafafa" , textAlign:"center"}}>
           {title}
          </Typography>
        <SkillLang/>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SkillSet;
