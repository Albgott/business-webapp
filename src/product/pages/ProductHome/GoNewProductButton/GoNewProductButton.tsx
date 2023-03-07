import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import AddIcon from '@mui/icons-material/AddCircle';

export interface GoNewProductButtonProps {}

const GoNewProductButton : React.FC<GoNewProductButtonProps> = () => {

	const navigate = useNavigate()

	return  (
		<Button onClick={() => navigate("new-product")}
					variant='contained' 
					sx={{
						backgroundColor:'var(--primary-color)',
						':hover':{
							backgroundColor:'var(--secondary-color)',

						},
						fontSize:{xs:'0.7rem', md:'1rem'}
					}}
					startIcon={<AddIcon/>}
				>
					new product
				</Button>
	)
};

export default GoNewProductButton;
