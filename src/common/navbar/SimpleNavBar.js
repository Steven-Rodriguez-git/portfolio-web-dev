import React,{useContext} from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Container, Link } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { Outlet } from "react-router-dom";
import { langContext } from "../../context/LangContext";


const SimpleNavBar = () => {
  const lang = useContext(langContext);
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
            <TranslateIcon
              className="secondaryPalete"
              onClick={() => lang.setLang()}
              style={{ padding: "2px", margin: "1px" }}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};
export default SimpleNavBar;
