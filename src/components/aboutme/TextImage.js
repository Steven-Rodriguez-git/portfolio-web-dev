import * as React from "react";
import "../../styles/TextImage.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const TextImage = () => {
  return (
    <React.Fragment>
      <Grid
        className="boxTextImage"
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={6}>
          <img src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl" alt="my_photo" width="100%"></img>
        </Grid>
        <Grid item xs>
          <Grid
            className="boxTextImage"
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h3">
              <FormattedMessage id="textImage.title"/>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6">
                <b>
                <FormattedMessage id="textImage.hi"/> <span className="blueText">Steven Rodriguez</span><FormattedMessage id="textImage.iam"/> <span className="blueText"> <FormattedMessage id="centerText.webdev"/> </span> 
                <FormattedMessage id="textImage.head"/>
                </b>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6">
              <FormattedMessage id="textImage.current"/><b><FormattedMessage id="textImage.degree"/></b>
              <FormattedMessage id="atThe"/>
                <b> <FormattedMessage id="textImage.unal"/></b>. 
                <FormattedMessage id="textImage.experience"/>
                <b>  <FormattedMessage id="textImage.backend"/></b><FormattedMessage id="textImage.micro"/> <b>
                <FormattedMessage id="textImage.frontend"/></b><FormattedMessage id="textImage.passionate"/> <span className="blueText"><FormattedMessage id="textImage.about"/></span>
              </Typography> 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TextImage;
