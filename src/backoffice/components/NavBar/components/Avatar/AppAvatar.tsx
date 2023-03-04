import { AppUser } from '@/models';
import { Avatar, Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { UserInfoMenu } from './UserInfoMenu';

export interface AvatarProps {
	user: AppUser
}

const AppAvatar : React.FC<AvatarProps> = ({user}) => {

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
			<UserInfoMenu user={user} anchorElement={userInfoOpener} onClose={closeUserInfo} />
		</Box>
	);
};

export default AppAvatar;
