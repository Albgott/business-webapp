import { AppUser } from '@/models';
import { Avatar, Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
export interface AppAvatarProps {
	user: AppUser
}

const AppAvatar : React.FC<AppAvatarProps> = ({user}) => {
	const [userInfoOpener, setUserInfoOpener] = React.useState<null | HTMLElement>(null);


	const showUserInfo = (event: React.MouseEvent<HTMLElement>) => {
		setUserInfoOpener(event.currentTarget);
	}

	const closeUserInfo = () => {
		setUserInfoOpener(null);
	}

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Show user info">
				<IconButton onClick={showUserInfo} sx={{ p: 0 }}>
					<Avatar alt={user.accountName} src="/notAPerson.jpg" />
				</IconButton>
			</Tooltip>
		</Box>
	);
};


export default AppAvatar;
