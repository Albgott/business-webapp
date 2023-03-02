import { Background, Container, LogoImage } from '@/auth/styled-components';
import React, { ReactNode } from 'react';
import logo from '/logo/horizontal/albgott-logo&name-negative.png'

export interface AuthLayoutProps {
	children?: ReactNode
}

const AuthLayout : React.FC<AuthLayoutProps> = ({children}) => {
	return(
		<Background>
			<LogoImage 
				src={logo}
				alt='logo'
				width='45%'
			/>

			<Container>
				{children}
			</Container>
			
		</Background>
	);
};

export default AuthLayout;
