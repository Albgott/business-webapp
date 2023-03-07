import { BackButton } from '@/components/BackButton';
import { useTogle } from '@/hooks';
import { AppUser } from '@/models';
import { RootState } from '@/redux/store';
import { Box, Drawer, Toolbar } from '@mui/material';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { DrawerMenu, DrawerNavbar, Navbar } from './components';

export interface DashboardProps {}

const DashboardLayout : React.FC<DashboardProps> = () => {
	const user: AppUser = useSelector((store: RootState) => store.user.principal)
  const { checked, togle } = useTogle()

	return(
		<Box sx={{ display: 'flex' }}>
			<Navbar user={user} toggleDrawer={togle}/>
      <DrawerMenu open={checked} onClick={togle}/>
      <Box
        component="main"
        sx={{width:'100%', minHeight:'100vh', p:1 }}
      >
        <Toolbar />
        <BackButton />
				<Outlet/>
      </Box>
    </Box>
	) ;
};

export default DashboardLayout;
