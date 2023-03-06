import { Divider, Toolbar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import InventoryIcon from '@mui/icons-material/Inventory';
import DrawerLink from '../Link/Link';
import { PrivateRoutes } from '@/router';


export interface DrawerNavbarProps {}

const DrawerNavbar : React.FC<DrawerNavbarProps> = () => {
	return (
		<DrawerNavbarStyle>
			<Toolbar />
			<Divider />
			<DrawerLink name='Products' to="lalala" icon={<InventoryIcon />} />
		</DrawerNavbarStyle>
	);
};

export const DrawerNavbarStyle = styled.div``;

export default DrawerNavbar;
