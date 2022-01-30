import * as React from "react";
import "../styles/Title.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";


const Title = ({title}) => {
    return (
    <React.Fragment>
        <Box className="boxTitle">
        <Typography variant="h2">
            {title}<span className="blueText">!</span>
          </Typography>
      </Box>
    </React.Fragment>

    );
  };
  
  export default Title;