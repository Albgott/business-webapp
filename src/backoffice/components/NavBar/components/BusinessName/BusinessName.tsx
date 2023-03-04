import { Typography } from '@mui/material';
import React from 'react';
export interface BusinessNameProps {
	name: String
}

const BusinessName : React.FC<BusinessNameProps> = ({name}) => {
	return (
		<Typography
			variant="h6"
			noWrap
			sx={{
				mr: 2,
				display: 'flex',
				fontFamily: 'monospace',
				fontSize: { xs: '500', md: '700' },
				fontWeight: { xs: '500', md: '700' },
				letterSpacing: '.1rem',
				color: 'inherit',
				textDecoration: 'none',
			}}
		>
			{name}
    </Typography>
	);
};

export default BusinessName;
