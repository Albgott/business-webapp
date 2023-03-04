import { PrivateRoutes } from '@/router';
import { Divider, Toolbar } from '@mui/material';
import React from 'react';
import { Action } from '../Action';
import { ActionsGroup } from '../ActionsGroup';


import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddProductIcon from '@mui/icons-material/AddCard';
import UserDetailsIcon from '@mui/icons-material/ManageAccounts';

export interface AppDrawerProps {}

const AppDrawer : React.FC<AppDrawerProps> = () => {
	return (
		<div>
			<Toolbar />
			<Divider />
			<ActionsGroup name="products">
				<Action name='list products' to={PrivateRoutes.LIST_PRODUCTS} icon={<InventoryIcon />} />
				<Action name='add product' to={PrivateRoutes.ADD_PRODUCT} icon={<AddProductIcon />} />
				<Action name='add category' to={PrivateRoutes.ADD_CATEGORY} icon={<CategoryIcon />} />
			</ActionsGroup>
			<ActionsGroup name="user">
				<Action name='show details' to={PrivateRoutes.SHOW_USER} icon={<UserDetailsIcon />} />
			</ActionsGroup>
		</div>
	);
};

export default AppDrawer;
