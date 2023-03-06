import { AppUser } from '@/models';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { AppAvatar, BusinessName } from './components';
import MenuIcon from '@mui/icons-material/Menu';

export interface NavbarProps {
	user : AppUser,
  toggleDrawer: () => void
}

const Navbar : React.FC<NavbarProps> = ({user, toggleDrawer}) => {
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
					sx={{ mr: 2}}
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

export const NavbarStyle = styled.div``;

export default Navbar;
