import React from "react";
import {Grid, Typography} from "@mui/material";
const FormContact = () => 
{
    return(
        <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{backgroundColor:"#64a3ff", height:"850px"}}>
            <Typography variant="h1" style={{color:"#fafafa"}}>Contact with me</Typography>
            <img src= "./img/creative.svg" alt=" Developer Vector http://www.freepik.com Designed by stories "/>  
        </Grid>
        <Grid item xs={12} md={6} style={{backgroundColor:"#004bb8", height:"850px"}}>
        <Typography variant="h1" style={{color:"#fafafa"}}>Loking for hiring?</Typography>
            <img src= "./img/developer.svg" alt="Developer Create Vector http://www.freepik.com Designed by stories "/>  
        </Grid>
        </Grid>
    );
};

export default FormContact;