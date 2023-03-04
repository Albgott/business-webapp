import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
export interface ActionProps {
	to: string,
	name: string,
	icon?: any
}

const Action : React.FC<ActionProps> = ({to, name, icon}) => {
	return(
		<Link style={{ textDecoration: 'none', color:'black' }} to={to}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>
						{icon}
					</ListItemIcon>
					<ListItemText style={{textTransform: 'lowercase', marginLeft: '-23px'}} primary={name} />
				</ListItemButton>
			</ListItem>
		</Link>
	)
};

export default Action;
