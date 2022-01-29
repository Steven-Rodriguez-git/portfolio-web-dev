import React from "react";
import "../../styles/SkillSet.css";
import { Typography } from "@mui/material";
import SkillBox from "./SkillBox";
import Grid from "@mui/material/Grid";
import Skills from "../../data/skills.json";

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
          <Typography variant="h3" style={{ color: "#fafafa" }}>
            Skill Sets
          </Typography>
       
        </Grid>
        <Grid item xs>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            {Skills.map((skill) => {
              return (
                <Grid item xs key={skill.id}>
                  <SkillBox name={skill.name} description={skill.description} img={skill.img}/>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SkillSet;
