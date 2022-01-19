import { Typewriter } from "react-simple-typewriter";
import "./CenterHead.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

const CenterHead = () => {
  return (
    <React.Fragment>
      <CssBaseline /> 
        <Box className="background">
          <h1 className="primaryText" style={{ paddingTop: "3rem" }}>
            Always your best option for
            <span className="importantText">
              <Typewriter loop typeSpeed={60} words={["Develop","Desing","Coding","Backend","Frontend"]} />
            </span>
          </h1>
        </Box>
    </React.Fragment>
  );
};

export default CenterHead;

//Photo by Thomas Griesbeck on Unsplash
