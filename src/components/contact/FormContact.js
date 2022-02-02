import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "../../styles/Contact.css";

const FormContact = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        item
        xs={12}
        md={6}
        style={{ backgroundColor: "#64a3ff", height: "700px" }}
      >
        <Grid item>
          <Link
            to="contact"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Typography variant="h3" style={{ color: "#fafafa" }}>
              Contact me!
            </Typography>
            <img
              className="imageContact"
              src="./img/creative.svg"
              alt=" Developer Vector http://www.freepik.com Designed by stories "
            />
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        style={{ backgroundColor: "#004bb8", height: "700px" }}
      >
        <Link
          to="contact"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Typography variant="h3" style={{ color: "#fafafa" }}>
            Loking to hire?
          </Typography>
          <img
            className="imageContact"
            src="./img/developer.svg"
            alt="Developer Create Vector http://www.freepik.com Designed by stories "
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default FormContact;
