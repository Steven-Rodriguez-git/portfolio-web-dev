import React, { useContext } from "react";
import "./NavBar.css";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { Link } from "react-scroll";
import { Outlet } from "react-router-dom";
import { langContext } from "../../context/LangContext";

const lang = localStorage.getItem("lang");


let pages = [
  {
    name: "About Me",
    link: "about",
  },
  {name:"Skills",link:"skills"},
  { name: "My Work", link: "mywork" },
  { name: "Contact", link: "contact" },
];

if (lang === "es") {
  pages = [
    {
      name: "Sobre mi",
      link: "about",
    },
    { name: "Habilidades", link: "skills" },
    { name: "Mi trabajo", link: "mywork" },
    { name: "Contacto", link: "contact" },
  ];
}

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const lang = useContext(langContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <AppBar className="primaryPalete">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              to="home"
              style={{ textDecoration: "none", color: "inherit" }}
              smooth={true}
              duration={1000}
            >
              <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  className="tertiaryPalete"
                  sx={{
                    flexGrow: 1,
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  Steven Developer
                </Typography>
              </div>
            </Link>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                className="secondaryPalete"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Link
              to="home"
              style={{ textDecoration: "none", color: "inherit" }}
              smooth={true}
              duration={1000}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                className="tertiaryPalete"
                href="/"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Steven Developer
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                  smooth={true}
                  duration={1000}
                  offset={-50}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                    className="secondaryPalete"
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
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
export default NavBar;
