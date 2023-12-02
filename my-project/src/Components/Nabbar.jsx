import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Home', 'About', 'Service', 'Protfolio', 'Testimonials', 'Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nabbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor : 'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "#26DABE",
              textDecoration: 'none',
            }}
          >
            TAREK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#26DABE"
            >
              <MenuIcon />
            </IconButton >
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
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>Home</Button><br/>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>About</Button><br/>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>Service</Button><br/>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>Protfolio</Button><br/>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>Testimonial</Button><br/>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>Contact</Button>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#26DABE',
              textDecoration: 'none',
            }}
          >
            TAREK
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{display : 'flex', gap : '1rem'}}>
              <Button sx={{color : 'black', fontWeight : '700' , marginLeft : '50vh', marginRight : 'auto', ":hover" :{backgroundColor :'#24bfa7'}}}>Home</Button>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>About</Button>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>Service</Button>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>Protfolio</Button>
              <Button sx={{color : 'black', fontWeight : '700', ":hover" :{backgroundColor :'#24bfa7'}}}>Testimonial</Button>
              <Button sx={{color : 'black', fontWeight : '700' , backgroundColor : '#26DABE', ":hover" :{backgroundColor :'#24bfa7'}}}>Contact</Button>
            </Box>
        </Box>  
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nabbar;