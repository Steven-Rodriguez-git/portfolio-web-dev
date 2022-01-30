import * as React from "react";
import "../../styles/TextImage.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

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
                Who I am <span className="blueText">?</span>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6">
                <b>
                  Hi, I'm <span className="blueText">Steven Rodriguez</span> and
                  i'm a <span className="blueText">Web developer </span> born in
                  Bogotá, Colombia. Since childhood I have been interested in
                  the world of computers and programming
                </b>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6">
                I am currently finishing my degree in <b>Systems Engineering</b> at the
                <b> National University of Colombia</b>. I have approximately 1+ years of
                experience in web development and design, I specialize in
                <b> backend development in Java and Python</b> with the management of
                microservices. However, I have also been in charge of <b>Frontend
                development in React</b>. I am really passionate about <span className="blueText">web development</span>,<span className="blueText">videogames</span> and <span className="blueText">computer security</span>.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TextImage;
