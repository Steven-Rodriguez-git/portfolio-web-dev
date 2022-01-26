import React from "react";
import "./SkillSet.css";
import { Typography } from "@mui/material";
import SkillBox from "./SkillBox";
import Grid from "@mui/material/Grid";

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
        <Grid item xs>
          <Typography variant="h3" style={{ color: "#fafafa" }}>
            Skill Sets
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid
            className="skillBack"
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs>
              <SkillBox />
            </Grid>
            <Grid item xs>
              <SkillBox />
            </Grid>
            <Grid item xs>
              <SkillBox />
            </Grid>
            <Grid item xs>
              <SkillBox />
            </Grid>
            <Grid item xs>
              <SkillBox />
            </Grid>
            <Grid item xs>
              <SkillBox />
            </Grid>
            <Grid item xs>
              <SkillBox />
            </Grid>
            <Grid item xs>
              <SkillBox />
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SkillSet;
