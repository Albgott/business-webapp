import { Box, Drawer } from '@mui/material';
import React from 'react';
import { DrawerNavbar } from '../DrawerNavbar';
export interface DrawerMenuProps {
	open:boolean,
	window?: () => Window;
	onClick: () => void
}

const drawerWidth = 240;

const DrawerMenu : React.FC<DrawerMenuProps> = ({open, window, onClick}) => {
	const container = window !== undefined ? () => window().document.body : undefined;
	return (
		<Box
		component="nav"
		aria-label=""
	>

		<Drawer
			container={container}
			variant="temporary"
			open={open}
			onClose={onClick}
			onClick={onClick}
			ModalProps={{
				keepMounted: false, 
			}}
			sx={{
				display: { xs: 'block'},
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background: 'var(--primary-color)'},
			}}
		>
			<DrawerNavbar />
		</Drawer>
	</Box>
	);
};

export default DrawerMenu;
