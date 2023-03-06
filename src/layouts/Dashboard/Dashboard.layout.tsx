import { AppUser } from '@/models';
import { RootState } from '@/redux/store';
import { Box, Drawer, Toolbar } from '@mui/material';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { DrawerNavbar, Navbar } from './components';

export interface DashboardProps {
	window?: () => Window;
}

const drawerWidth = 240;

const DashboardLayout : React.FC<DashboardProps> = ({window}) => {
	const user: AppUser = useSelector((store: RootState) => store.user.principal)

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

	const container = window !== undefined ? () => window().document.body : undefined;

	return(
		<Box sx={{ display: 'flex' }}>
			<Navbar user={user} toggleDrawer={handleDrawerToggle}/>
      
      <Box
        component="nav"
        aria-label=""
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: false, 
          }}
          sx={{
            display: { xs: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background: 'var(--primary-color)'},
          }}
        >
          <DrawerNavbar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{width:'100%', minHeight:'100vh', p:1 }}
      >
        <Toolbar />
				<Outlet/>
      </Box>
    </Box>
	) ;
};

export default DashboardLayout;
