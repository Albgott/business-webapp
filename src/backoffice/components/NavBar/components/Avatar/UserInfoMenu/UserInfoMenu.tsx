import { AppUser } from '@/models';
import { Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
export interface UserInfoMenuProps {
	user: AppUser,
	anchorElement: null | HTMLElement,
	onClose: () => void
}

const UserInfoMenu : React.FC<UserInfoMenuProps> = ({user, anchorElement, onClose}) => {

	const information = [`${user.accountName}`,`${user.email}`,`${user.accountId}`]

	return (
		<Menu
			sx={{ mt: '45px' }}
			id="menu-appbar"
			anchorEl={anchorElement}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={Boolean(anchorElement)}
			onClose={onClose}
		>
			{information.map((data) => (
				<MenuItem key={data} onClick={onClose} sx={{placeContent: 'center'}}>
					<Typography textAlign="center">{data}</Typography>
				</MenuItem>
			))}
		</Menu>
	)
};

export default UserInfoMenu;
