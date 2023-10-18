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
	return (
		<>
			<IconButton
				onClick={() => {
					props.setIsDrawerOpen(true);
				}}>
				<MenuRoundedIcon fontSize='large' color={'primary'} />
			</IconButton>

			<Drawer
				anchor='right'
				open={props.isDrawerOpen}
				onClose={() => {
					props.setIsDrawerOpen(false);
				}}>
				<Box
					width={250}
					backgroundColor='primary.background.default'
					height='100vh'
					role='presentation'>
					<Box
						display='flex'
						justifyContent='start'
						alignItems='center'
						padding={1.5}>
						<img
							src={props.themeMode === 'dark' ? logo : logo_dark}
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
								props.setIsDrawerOpen(false);
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
								props.setIsDrawerOpen(false);
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
								props.setIsDrawerOpen(false);
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
								props.setIsDrawerOpen(false);
							}}>
							About
						</Button>
					</Grid>
				</Box>
			</Drawer>
		</>
	);
}
