import { Divider, List, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
export interface ActionsGroupProps {
	children: ReactNode,
	name: string
}

const ActionsGroup : React.FC<ActionsGroupProps> = ({children, name}) => {
	return (
		<List>
				<Typography 
				  marginLeft='10px'
					variant= 'h6'
				 	fontWeight= '600' 
					textAlign= 'left'
					textTransform= 'uppercase'
				>
					{name}
				</Typography>
        {children}
				<Divider />
    </List>
	);
};

export default ActionsGroup;
