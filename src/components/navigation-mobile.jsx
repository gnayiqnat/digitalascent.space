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
	ListItemButton,
	Divider,
	Grid,
	Paper,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	CssBaseline,
	ListItemText,
} from '@mui/material';
import logo from '../assets/logo-large.png';
import logo_dark from '../assets/logo-large-black.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { motion } from 'framer-motion';
import {
	BrowserRouter as Router,
	Link as RouterLink,
	Routes,
	useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MobileNavigation(props) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<>
			<IconButton
				onClick={() => {
					setIsDrawerOpen(true);
				}}>
				<MenuRoundedIcon fontSize='large' color={'primary'} />
			</IconButton>

			<Drawer
				anchor='right'
				marginLeft={-10}
				open={isDrawerOpen}
				onClose={() => {
					setIsDrawerOpen(false);
				}}>
				<Box
					backgroundColor='primary.background'
					width={250}
					height='100vh'
					role='presentation'>
					<Box
						display='flex'
						marginLeft={-19}
						justifyContent={'center'}
						alignItems='center'>
						<img
							src={props.themeMode === 'dark' ? logo : logo_dark}
							style={{ marginLeft: 5, marginTop: 10 }}
							width={65}
						/>
					</Box>
					<Grid container flexDirection='column' marginTop={'10vh'}>
						<Button
							style={{
								height: 'clamp(60px, 10vh, 150px)',
								fontSize: '1.5rem',
								fontWeight: 300,
							}}
							component={RouterLink}
							to={'/'}
							onClick={() => {
								setIsDrawerOpen(false);
							}}>
							Home
						</Button>
						<Button
							style={{
								height: 'clamp(60px, 10vh, 150px)',
								fontSize: '1.5rem',
								fontWeight: 300,
							}}
							component={RouterLink}
							to={'/games'}
							onClick={() => {
								setIsDrawerOpen(false);
							}}>
							Games
						</Button>
						<Button
							style={{
								height: 'clamp(60px, 10vh, 150px)',
								fontSize: '1.5rem',
								fontWeight: 300,
							}}
							component={RouterLink}
							to={'/credits'}
							onClick={() => {
								setIsDrawerOpen(false);
							}}>
							Credits
						</Button>
						<Button
							style={{
								height: 'clamp(60px, 10vh, 150px)',
								fontSize: '1.5rem',
								fontWeight: 300,
							}}
							component={RouterLink}
							to={'/about'}
							onClick={() => {
								setIsDrawerOpen(false);
							}}>
							About
						</Button>
					</Grid>
				</Box>
			</Drawer>
		</>
	);
}
