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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { motion } from 'framer-motion';
import {
	BrowserRouter as Router,
	Link as RouterLink,
	Routes,
	useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import MobileNavigation from './navigation-mobile';
import logo from '../assets/logo-large.png';
import logo_dark from '../assets/logo-large-black.png';
import { useMediaQuery } from 'react-responsive';

export default function NavTabs(props) {
	const [value, setValue] = useState(0);
	const [isNotInTabs, setIsNotInTabs] = useState();
	const handleChange = (_e, newValue) => {
		setValue(newValue);
	};

	const windowURL = useLocation().pathname;
	useEffect(() => {
		if (windowURL === '/') {
			if (isNotInTabs === 1) {
				setIsNotInTabs(0);
			}
			setValue(0);
		} else if (windowURL === '/games') {
			if (isNotInTabs === 1) {
				setIsNotInTabs(0);
			}
			setValue(1);
		} else if (windowURL === '/credits') {
			if (isNotInTabs === 1) {
				setIsNotInTabs(0);
			}
			setValue(2);
		} else if (windowURL === '/about') {
			if (isNotInTabs === 1) {
				setIsNotInTabs(0);
			}
			setValue(3);
		} else {
			setIsNotInTabs(1);
		}
	});

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<AppBar
			sx={{
				backgroundColor: 'primary.background',
				marginBottom: 15,
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
				{isMobile ? (
					<>
						<Button disableRipple LinkComponent={RouterLink} to='/'>
							<img
								sx={{ marginLeft: 5, marginTop: 15 }}
								width={65}
								src={props.themeMode === 'dark' ? logo : logo_dark}
							/>
						</Button>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<ThemeSwitcher
								themeMode={props.themeMode}
								setThemeMode={props.setThemeMode}
							/>
							<MobileNavigation isDrawerOpen={props.isDrawerOpen} setIsDrawerOpen={props.setIsDrawerOpen}
								themeMode={props.themeMode}
								setThemeMode={props.setThemeMode}
							/>
						</Box>
					</>
				) : (
					<Button disableRipple LinkComponent={RouterLink} to='/'>
						<img
							src={props.themeMode === 'dark' ? logo : logo_dark}
							style={{ marginLeft: 5, marginTop: 10 }}
							width={65}
						/>
					</Button>
				)}
				{!isMobile && (
					<>
						<Tabs
							id='tab'
							value={value}
							onChange={handleChange}
							aria-label='Navigation'
							TabIndicatorProps={{
								sx: {
									bottom: 5,
									marginLeft: '6.4%',
									height: 3,
									maxWidth: 45,
									borderRadius: 10,
									display: isNotInTabs === 1 ? 'none' : 'block',
								},
							}}>
							<Tab
								disableRipple
								label='Home'
								index={0}
								LinkComponent={RouterLink}
								to={'/'}
								sx={{ color: 'secondary.text' }}
							/>
							<Tab
								disableRipple
								label='Games'
								index={1}
								component={RouterLink}
								to={'/games'}
								sx={{ color: 'secondary.text' }}
							/>{' '}
							<Tab
								disableRipple
								label='Credits'
								index={2}
								component={RouterLink}
								to={'/credits'}
								sx={{ color: 'secondary.text' }}
							/>{' '}
							<Tab
								disableRipple
								label='About'
								index={3}
								component={RouterLink}
								to={'/about'}
								sx={{ color: 'secondary.text' }}
							/>
						</Tabs>
						<ThemeSwitcher
							themeMode={props.themeMode}
							setThemeMode={props.setThemeMode}
						/>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
}

function ThemeSwitcher(props) {
	const toggleSwitch = () => {
		props.setThemeMode(props.themeMode === 'light' ? 'dark' : 'light');
	};

	return (
		<div
			onClick={() => {
				toggleSwitch();
			}}>
			<IconButton>
				{props.themeMode === 'light' ? (
					<LightModeIcon color='primary' />
				) : (
					<DarkModeIcon color='primary' />
				)}
			</IconButton>
		</div>
	);
}
