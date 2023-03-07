
import { Typography } from '@mui/material';
import React from 'react';
export interface PageTitleProps {
	children:string
}

const PageTitle : React.FC<PageTitleProps> = ({children}) => {
	return (
		<Typography
			fontWeight='bold'
			sx={{
				fontSize: {xs:'2rem', md:'3rem'}
			}}
		>
			{children}
		</Typography>
	)
};

export default PageTitle;
