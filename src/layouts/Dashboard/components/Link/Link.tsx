import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export interface DrawerLinkProps {
	to: string,
	name: string,
	icon?: any
}

const DrawerLink : React.FC<DrawerLinkProps> = ({to, name, icon}) => {
	return(
		<DrawerLinkStyle to={to}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						{icon}
					</ListItemIcon>
					<ListItemText style={{textTransform: 'capitalize', marginLeft: '-23px'}} primary={name} />
				</ListItemButton>
			</ListItem>
		</DrawerLinkStyle>
	)
};

export const DrawerLinkStyle = styled(Link)`
	text-decoration: none;
	color: black
`;

export default DrawerLink;
