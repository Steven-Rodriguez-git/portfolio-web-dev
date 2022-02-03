import * as React from "react";
import "../../styles/CenterText.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FormattedMessage } from "react-intl";

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
            <FormattedMessage id="centerText.name"/>
            <span className="blueText">Steven</span>  <FormattedMessage id="centerText.iam"/> <span className="blueText"><FormattedMessage id="centerText.webdev"/> </span> <FormattedMessage id="centerText.based"/> Bogotá, Colombia.
          </Typography>
          <Typography variant="h5">
          <FormattedMessage id="centerText.exp"/><b> <FormattedMessage id="centerText.desydev"/></b><FormattedMessage id="centerText.skills"/> 
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
