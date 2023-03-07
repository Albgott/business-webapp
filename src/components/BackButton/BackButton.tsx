import React from 'react';
import { usePreviousPage } from '@/hooks';
import { IconButton } from '@mui/material';
import BackIcon from '@mui/icons-material/ArrowBackIos';
export interface BackButtonProps {}

const BackButton : React.FC<BackButtonProps> = () => {

	const {goBack} = usePreviousPage()

	return (
		<IconButton aria-label="back" onClick={goBack} >
			<BackIcon sx={{ color: 'var(--secondary-color)'}}/>
		</IconButton>
	);
};

export default BackButton;
