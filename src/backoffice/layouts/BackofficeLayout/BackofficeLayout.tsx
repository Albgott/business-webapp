import { AppDrawer } from '@/backoffice/components';
import { NavBar } from '@/backoffice/components/NavBar';
import { AppUser } from '@/models';
import { RootState } from '@/redux/store';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

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

	const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

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
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background: 'var(--primary-color)'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
				{children}
				<h2></h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro provident dolore eius blanditiis. Unde error ullam harum, aliquam animi sed modi, id facilis fuga deleniti aut magni officiis excepturi provident.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque a odit error dolor! Iusto, voluptatibus pariatur, laudantium quaerat, nemo enim et magni debitis esse neque nihil minima dolor reprehenderit?
				</p>
      </Box>
    </Box>
		</>
	) ;
};

export default BackofficeLayout;
