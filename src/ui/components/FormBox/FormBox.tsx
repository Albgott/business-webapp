import { Box } from '@mui/material';

import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface FormBoxProps {
	children: ReactNode | ReactNode[],
	title?: string
}

const FormBox : React.FC<FormBoxProps> = ({children,title}) => {
	return (
		<Box padding={1.3} sx={{
			backgroundColor: 'var(--secondary-color)',
			borderRadius: '20px'
		}}>
			<Box sx={{
				paddingTop:2,
				paddingX:2,
				backgroundColor: 'var(--secondary-color)',
				border: 2 ,
				borderRadius: '20px',
				borderColor: 'var(--primary-color)',
			}}>
				<StyledTitle>{title}</StyledTitle>
				<Box paddingX={{md:'10%'}} sx={{
					justifyContent: 'center'
				}}>
					{children}
				</Box>
			</Box>
		</Box>
	)};

const StyledTitle = styled.h4`
	color: var(--primary-color);
	font-size: 1rem;
	@media (min-width: 900px) {
		font-size: 1.2rem
	}
	margin:0
`

export default FormBox;
