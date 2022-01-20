import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SpringLogo from "../img/spring-framework-icon.svg";

const SkillBox = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs>
        <Typography variant="h4">Java</Typography>
      </Grid>

      <div className="img">
        <img className="icon" src={SpringLogo} alt="Spring boot Logo" />
      </div>
      <Grid item xs>
        <Typography variant="body1">
          <b>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SkillBox;
