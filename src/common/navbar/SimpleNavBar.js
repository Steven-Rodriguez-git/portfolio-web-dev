import * as React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Container, Link } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {} from "react-scroll";
import { Outlet } from "react-router-dom";

const SimpleNavBar = () => {
  return (
    <div>
      <AppBar className="primaryPalete">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
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
            <SettingsIcon
              className="secondaryPalete"
              style={{ padding: "5px" }}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};
export default SimpleNavBar;
