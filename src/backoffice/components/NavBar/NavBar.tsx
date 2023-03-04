import { AppUser } from '@/models';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { AppAvatar, BusinessName } from './components';

interface Props {
  user : AppUser,
  toggleDrawer: () => void
}

const NavBar : React.FC<Props> = ({user, toggleDrawer}) => {
  

	return (
    <AppBar position='fixed' sx={{
        backgroundColor: 'var(--secondary-color)',
        zIndex: 1201
      }}
    >
      <Container maxWidth={false} >
        <Toolbar disableGutters sx={{placeContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <BusinessName name={user.businessName} />
          <AppAvatar user={user} />
        </Toolbar>
      </Container>
    </AppBar>
  )
  
};

export default NavBar;
