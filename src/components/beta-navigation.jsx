import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import {
	BrowserRouter as Router,
	Link as RouterLink,
	Routes,
	useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo-large.png';
import { motion } from 'framer-motion';

export default function NavTabs() {
	const [value, setValue] = useState();

	const handleChange = (_e, newValue) => {
		setValue(newValue);
	};

	const windowURL = useLocation().pathname;
	useEffect(() => {
		if (windowURL === '/') {
			setValue(0);
		} else if (windowURL === '/games') {
			setValue(1);
		} else if (windowURL === '/credits') {
			setValue(2);
		} else if (windowURL === '/about') {
			setValue(3);
		} else {
			setValue(null);
		}
	});

	const [isBelow768p, setIsBelow768] = useState(
		window.innerWidth < 768 ? true : false
	);

	window.addEventListener('resize', () => {
		if (window.innerWidth < 768) {
			if (isBelow768p === false) {
				setIsBelow768(true);
			}
		} else {
			if (isBelow768p === true) {
				setIsBelow768(false);
			}
		}
	});

	return (
		<AppBar
			style={{
				marginBottom: 40,
				background: '#000016',
				position: 'relative',
			}}
			elevation={0}>
			<Toolbar
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					height: '60px',
					paddingLeft: 3,
				}}>
				{isBelow768p ? (
					<>
						<Button disableRipple LinkComponent={RouterLink} to='/'>
							<img
								style={{ marginLeft: 5, marginTop: 15, width: '65px' }}
								src={logo}
							/>
						</Button>
						<MobileNavigation />
					</>
				) : (
					<Button disableRipple LinkComponent={RouterLink} to='/'>
						<img
							src={logo}
							style={{ marginLeft: 5, marginTop: 10 }}
							width='65px'
						/>
					</Button>
				)}
				{isBelow768p ? (
					<></>
				) : (
					<>
						<Tabs
							id='tab'
							value={value}
							onChange={handleChange}
							aria-label='Navigation'
							indicatorColor='primary'
							textColor='primary'
							TabIndicatorProps={{
								sx: {
									bottom: 1,
									marginLeft: '6.4%',
									height: 3,
									maxWidth: 45,
									borderRadius: 10,
									backgroundcolor: '#5a4a69',
									display: value === null ? 'none' : 'block',
								},
							}}>
							<Tab
								disableRipple
								label='Home'
								index={0}
								LinkComponent={RouterLink}
								to={'/'}
								sx={{ color: 'primary' }}
							/>
							<Tab
								disableRipple
								label='Games'
								index={1}
								component={RouterLink}
								to={'/games'}
								sx={{ color: 'primary' }}
							/>{' '}
							<Tab
								disableRipple
								label='Credits'
								index={1}
								component={RouterLink}
								to={'/credits'}
								sx={{ color: 'primary' }}
							/>{' '}
							<Tab
								disableRipple
								label='About'
								index={1}
								component={RouterLink}
								to={'/about'}
								sx={{ color: 'primary' }}
							/>
						</Tabs>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
}

function MobileNavigation() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<>
			<IconButton
				onClick={() => {
					setIsDrawerOpen(true);
				}}>
				<MenuRoundedIcon style={{ fontSize: 40 }} />
			</IconButton>

			<Drawer
				anchor='left'
				marginLeft={-10}
				open={isDrawerOpen}
				onClose={() => {
					setIsDrawerOpen(false);
				}}>
				<Box
					backgroundColor='#000000'
					width={250}
					height='100vh'
					role='presentation'>
					<Box
						display='flex'
						marginLeft={-19}
						justifyContent={'center'}
						alignItems='center'>
						<img
							src={logo}
							style={{ marginLeft: 5, marginTop: 10 }}
							width='65px'
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

function SignupLoginButtons() {
	return (
		<Box>
			<>
				<Button
					variant='contained'
					sx={{ color: 'black', borderRadius: 4, marginRight: 1 }}
					LinkComponent={RouterLink}
					to='/signup'>
					Sign Up
				</Button>
				<Button
					variant='outlined'
					sx={{ color: '#ffffff', borderRadius: 4 }}
					LinkComponent={RouterLink}
					to='/login'>
					Log in
				</Button>
			</>
		</Box>
	);
}
