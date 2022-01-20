import * as React from "react";
import "./CenterText.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const CenterText = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className="text">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{marginBottom:{xs:"40%",md:"0"},marginTop:{xs:"40%",md:"0"}}}
        >
          <Typography variant="h5">
            Hi, my name is <span className="blueText">Steven</span> and i'm a <span className="blueText">Web developer </span>  based
            in Bogotá, Colombia.
          </Typography>
          <Typography variant="h5">
            I have experience <b>Desining & Developing</b> responsive, lovely & functional websites.
          </Typography>
          <Typography variant="h5">
            I specialize in <b>Backend</b> development in <span className="blueText">Java</span> and <span className="blueText">Python</span> with <b>Frontend</b> in <span className="blueText">React</span>.
          </Typography>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CenterText;
