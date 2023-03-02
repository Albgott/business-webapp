import { AppDrawer } from '@/backoffice/components';
import { NavBar } from '@/backoffice/components/NavBar';
import React, { ReactNode } from 'react';

export interface BackofficeLayoutProps {
	children?: ReactNode
}

const BackofficeLayout : React.FC<BackofficeLayoutProps> = ({children}) => {
	return(
		<>
			<NavBar />
			<AppDrawer/>
			{children}
		</>
	) ;
};

export default BackofficeLayout;
