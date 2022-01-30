import React from "react";
import { Grid, Typography } from "@mui/material";
const FormContact = () => {
  return (
    <Grid container spacing={2} >
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAling="center"
        item
        xs={12}
        md={6}
        style={{ backgroundColor: "#64a3ff", height: "700px"}}
      >
        <Typography variant="h3" style={{ color: "#fafafa" }}>
          Contact me!
        </Typography>
        <img
          src="./img/creative.svg"
          alt=" Developer Vector http://www.freepik.com Designed by stories "
          style={{ height: "250px", margin:"25px"}}
        />
      </Grid>
      <Grid
        container 
        xs={12}
        md={6}
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAling="center"
        style={{ backgroundColor: "#004bb8", height: "700px" }}
      >
        <Typography variant="h3" style={{ color: "#fafafa" }}>
          Loking to hire?
        </Typography>
        <img
          src="./img/developer.svg"
          alt="Developer Create Vector http://www.freepik.com Designed by stories "
          style={{ height: "250px", margin:"30px" }}
        />
      </Grid>
    </Grid>
  );
};

export default FormContact;
