import React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Container, Link } from "@mui/material";
import { Outlet } from "react-router-dom";



const SimpleNavBar = () => {
  return (
    <div>
      <AppBar className="primaryPalete">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Link href="/portfolio-web-dev/" style={{ textDecoration: "none", color: "inherit" }}>
              <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  className="tertiaryPalete"
                  sx={{ flexGrow: 1, mr: 2 }}
                >
                  Steven Developer
                </Typography>
              </div>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};
export default SimpleNavBar;
