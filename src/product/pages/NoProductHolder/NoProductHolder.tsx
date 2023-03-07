import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { GoNewProductButton } from '../ProductHome/GoNewProductButton';
export interface NoProductHolderProps {}

const NoProductHolder : React.FC<NoProductHolderProps> = () => {
	return (
		<Container maxWidth={false} sx={{ display:'flex', paddingTop:10, placeContent:'center'}}>
			<Box sx={{ display:'flex', flexDirection:'column',maxWidth:'250px'}}>
				<Typography
					sx={{
						textAlign:'center',
						fontSize:{xs:'1rem', md:'1.2rem'},
					}}
				>
					There are no products.
				</Typography>

				<Typography
					sx={{
						textAlign:'center',
						fontWeight:'700',
						fontSize:{xs:'1rem', md:'1.3rem'}
					}}
				>
					Try adding one.
				</Typography>
				<GoNewProductButton />
			</Box>
		</Container>
	)
};

export default NoProductHolder;
