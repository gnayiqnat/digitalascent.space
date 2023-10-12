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
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';

export default function NavTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (_e, newValue) => {
		setValue(newValue);
	};

	const windowURL = window.location.href;
	useEffect(() => {
		if (windowURL.includes('/games')) {
			setValue(1);
		} else if (windowURL.includes('credits')) {
			setValue(2);
		} else if (windowURL.includes('about')) {
			setValue(3);
		}
	});

	const [isBelow768p, setIsBelow768] = useState(
		window.innerWidth < 768 ? true : false
	);

	function checkWidth() {
		if (window.innerWidth < 768) {
			if (isBelow768p === false) {
				setIsBelow768(true);
			}
		} else {
			if (isBelow768p === true) {
				setIsBelow768(false);
			}
		}
	}
	window.addEventListener('resize', () => {
		checkWidth();
	});

	return (
		<AppBar
			style={{
				marginTop: 0,
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
				}}>
				{isBelow768p ? (
					<MobileNavigation />
				) : (
					<Button
						disableRipple
						LinkComponent={RouterLink}
						to='/'
						onClick={() => {
							setValue(0);
						}}>
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
							},
						}}>
						<Tab
							disableRipple
							label='Home'
							index={0}
							component={RouterLink}
							to={'/'}
							sx={{ color: '#ffffff' }}
						/>
						<Tab
							disableRipple
							label='Games'
							index={1}
							component={RouterLink}
							to={'/games'}
							sx={{ color: '#ffffff' }}
						/>{' '}
						<Tab
							disableRipple
							label='Credits'
							index={1}
							component={RouterLink}
							to={'/credits'}
							sx={{ color: '#ffffff' }}
						/>{' '}
						<Tab
							disableRipple
							label='About'
							index={1}
							component={RouterLink}
							to={'/about'}
							sx={{ color: '#ffffff' }}
						/>
					</Tabs>
				)}
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
							style={{ height: 'clamp(60px, 10vh, 150px)', fontSize:'1.5rem'}}
							component={RouterLink}
							to={'/'}
							onClick={() => {
								setIsDrawerOpen(false);
							}}>
							Home
						</Button>
						<Button
							style={{ height: 'clamp(60px, 10vh, 150px)', fontSize:'1.5rem' }}
							component={RouterLink}
							to={'/games'}
							onClick={() => {
								setIsDrawerOpen(false);
							}}>
							Games
						</Button>
						<Button
							style={{ height: 'clamp(60px, 10vh, 150px)', fontSize:'1.5rem' }}
							component={RouterLink}
							to={'/credits'}
							onClick={() => {
								setIsDrawerOpen(false);
							}}>
							Credits
						</Button>
						<Button
							style={{ height: 'clamp(60px, 10vh, 150px)', fontSize:'1.5rem' }}
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
