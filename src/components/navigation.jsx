import {
	Typography,
	Button,
	IconButton,
	Fab,
	Box,
	AppBar,
	Toolbar,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	Grid,
	Paper,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	CssBaseline,
} from '@mui/material';

import logo from '../assets/logo.jpeg';

import { Route } from 'react-router';
import {
	BrowserRouter as Router,
	Link as RouterLink,
	Routes,
} from 'react-router-dom';

import Games from '../pages/games/games';

function Nav() {
	return (
		<>
			<CssBaseline />
			<AppBar style={{ background: '#000016', position: 'relative' }}>
				<Toolbar
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
						height: '60px',
					}}>
					<Button component={RouterLink} to={'/'}>
						<img src={logo} style={{ marginTop: 5 }} width='50px' />
					</Button>
					<Box
						style={{
							width: '30vw',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '60px',
						}}>
						<Button
							component={RouterLink}
							to={'/'}
							variant='text'
							color='inherit'>
							Home
						</Button>
						<Button
							component={RouterLink}
							to={'/games'}
							variant='text'
							color='inherit'>
							Our Games
						</Button>
						<Button
							component={RouterLink}
							to={'/credits'}
							variant='text'
							color='inherit'
							className={({ isActive }) => {
								console.log(isActive);
							}}>
							Credits
						</Button>
						<Button
							component={RouterLink}
							to={'/about'}
							variant='text'
							color='inherit'>
							About
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Nav;
