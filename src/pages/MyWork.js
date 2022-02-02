import React from "react";
import { Grid } from "@mui/material";
import CardWork from "../components/mywork/CardWork";
import Title from "../common/Title"

const MyWork = () => {
  return (
    <div id="mywork">
      <Grid container spacing={2}>
        <Title title="My Works"/>
        <Grid item xs={12} style={{ backgroundColor: "#fafafa", height: "600px" }}>
            <CardWork/>
        </Grid>
        <Grid item xs={12} style={{ backgroundColor: "#fafafa", height: "600px" }}>
            <CardWork/>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyWork;
    