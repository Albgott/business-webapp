import { AppDrawer } from '@/backoffice/components';
import { NavBar } from '@/backoffice/components/NavBar';
import { AppUser } from '@/models';
import { RootState } from '@/redux/store';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Action } from '@/backoffice/components/Action';

export interface BackofficeLayoutProps {
	children?: ReactNode,
	window?: () => Window;
}

const drawerWidth = 240;

const BackofficeLayout : React.FC<BackofficeLayoutProps> = ({children, window}) => {
	const user: AppUser = useSelector((store: RootState) => store.user.principal)

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

	const container = window !== undefined ? () => window().document.body : undefined;

	return(
		<>
			<Box sx={{ display: 'flex' }}>
				<NavBar user={user} toggleDrawer={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background: 'var(--primary-color)'},
          }}
        >
          <AppDrawer />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background: 'var(--primary-color)'},
          }}
          open
        >
          <AppDrawer />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
				{children}
      </Box>
    </Box>
		</>
	) ;
};

export default BackofficeLayout;
