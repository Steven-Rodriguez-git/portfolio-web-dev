import React from "react";
import { Grid } from "@mui/material";
import CardWork from "../components/mywork/CardWork";
import Title from "../common/Title"


const lang = localStorage.getItem("lang");

let title="My Works "; 

if(lang==='es')
{
  title="Mi Trabajo "; 
}

const MyWork = () => {
  return (
    <div id="mywork">
      <Grid container spacing={2}>
        <Title title={title}/>
        <Grid item xs={12} style={{ backgroundColor: "#fafafa", height: "600px" }}>
            <CardWork/>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyWork;
    