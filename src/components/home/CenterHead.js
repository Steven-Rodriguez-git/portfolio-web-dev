import { Typewriter } from "react-simple-typewriter";
import "../../styles/CenterHead.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { FormattedMessage } from "react-intl";


const lang = localStorage.getItem("lang");

let TypewriterLang = () => {
  return (
    <Typewriter
      loop
      typeSpeed={60}
      words={["Develop", "Desing", "Coding", "Backend", "Frontend"]}
    />
  );
};

if (lang === "es") {
  TypewriterLang = () => {
    return (
      <Typewriter
        loop
        typeSpeed={60}
        words={["Desarrollo", "Diseño", "Código", "Backend", "Frontend"]}
      />
    );
  };

}

const CenterHead = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className="background">
        <h1 className="primaryText" style={{ paddingTop: "3rem" }}>
          <FormattedMessage id="header.welcome" />
          <br />
          <span className="importantText">
            <TypewriterLang />
          </span>
        </h1>
      </Box>
    </React.Fragment>
  );
};

export default CenterHead;

//Photo by Thomas Griesbeck on Unsplash
