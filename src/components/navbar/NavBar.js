import * as React from 'react';
import "./NavBar.css";
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,MenuItem,Container,Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

const pages = ['About Me', 'My Work', 'Contact'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar className="primaryPalete">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className='tertiaryPalete'
            sx={{flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Steven Developer
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className='secondaryPalete'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className='tertiaryPalete'
            sx={{ flexGrow: 1,display: { xs: 'flex', md: 'none'}}}
          >
            Steven Developer
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent:"flex-end", display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                className='secondaryPalete'
              >
                {page}
              </Button>
            ))}
          </Box>
          <SettingsIcon className='secondaryPalete' style={{ padding:'5px'}}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;