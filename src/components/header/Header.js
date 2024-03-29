import React, { useState } from 'react';
import './header.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge'; // 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 'auto',
  width: '60%', // Make the search box wider
  display: 'flex', // Add display flex to align items horizontally
  alignItems: 'center', // Center items vertically
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2), // Adjust padding
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(5em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '70%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    borderColor: '#333',
}}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
      
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls={menuId}
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <Typography variant="inherit">Profile</Typography>
//       </MenuItem>
//     </Menu>
//   );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f5f5f5' }} >
        <Toolbar>
          <Typography
            variant="h6"
            color='black'
            noWrap
            component="div"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            JUMIA
            <StarsRoundedIcon className='logo-icon'  style={{ color: '#ff9100'}} />
          </Typography>

          <Search className='search'>
            <SearchIcon style={{ color: 'inherit'}}/>
            <StyledInputBase
              placeholder="Search products, brands and categories"
              variant='outlined'
              
            />
          </Search>
          <Button variant="contained" style={{ background: '#ff9100'}} fontWeight='bold'>Search</Button>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails">
              <Badge color="erro">
                 <PersonOutlineIcon color='inherit'/>
                 <Typography color='textSecondary' fontWeight='bold'>Account</Typography>
                <KeyboardArrowDownIcon  color='inherit'/>
              </Badge>
            </IconButton>

            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge color="error">
                <HelpOutlineOutlinedIcon  color='inherit'/>
                <Typography color='textSecondary' fontWeight='bold'>Help</Typography>
                <KeyboardArrowDownIcon  color='inherit' />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              
            >
              <ShoppingCartOutlinedIcon  style={{ color: 'textSecondary' }}/>
              <Typography color='textSecondary' fontWeight='bold'>Cart</Typography>
            </IconButton>
          </Box>

        </Toolbar>

      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}
