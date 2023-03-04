import { useLogout } from '@/auth/hooks';
import React from 'react';
import styled from 'styled-components';
export interface LogoutButtonProps {}

const LogoutButton : React.FC<LogoutButtonProps> = () => {
	const { doLogout } = useLogout()

	return <StyledLogoutButton onClick={doLogout}>Log out</StyledLogoutButton>;
};

export default LogoutButton;

const StyledLogoutButton = styled.button`
	
`
