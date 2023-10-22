import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
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
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { motion, useAnimation, useAnimationControls } from 'framer-motion';
import {
	Link,
	BrowserRouter as Router,
	Link as RouterLink,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MobileNavigation from './navigation-mobile';
import logo from '../assets/logo-large.png';
import logo_dark from '../assets/logo-large-black.png';
import { useMediaQuery } from 'react-responsive';

export default function NavTabs(props) {
	const [value, setValue] = useState(0);
	const [isNotInTabs, setIsNotInTabs] = useState();
	const handleChange = (_e, newValue) => {
		setValue(newValue);
		console.log(_e, newValue);
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
				position: 'relative',
			}}
			elevation={0}
		>
			<Toolbar
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					height: '60px',
					paddingLeft: 3,
				}}
			>
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
							<Box display='flex' flexDirection='row'>
								<ThemeSwitcher
									themeMode={props.themeMode}
									setThemeMode={props.setThemeMode}
								/>
							</Box>
							<MobileNavigation
								isDrawerOpen={props.isDrawerOpen}
								setIsDrawerOpen={props.setIsDrawerOpen}
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
							}}
						>
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
						<Box display='flex' flexDirection='row'>
							<NotificationSystem themeMode={props.themeMode} mobile={false} />
							<ThemeSwitcher
								themeMode={props.themeMode}
								setThemeMode={props.setThemeMode}
							/>
							{/*<Button
							component={RouterLink}
							to={'/signup'}
								style={{
									backgroundColor: 'primary.background.default',
									color: 'primary.text',
								}}
							>
								Sign up
							</Button>
							<Button
							component={RouterLink}
							to={'/login'}
								style={{
									backgroundColor: 'primary.text',
									color: 'primary.background.default',
								}}
							>
								Log in
							</Button>*/}
						</Box>
					</>
				)}{' '}
			</Toolbar>
		</AppBar>
	);
}

function ThemeSwitcher(props) {
	return (
		<div
			onClick={() => {
				props.setThemeMode(props.themeMode === 'light' ? 'dark' : 'light');
			}}
		>
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

function NotificationSystem(props) {
	const notifAnimation = useAnimationControls();
	const componentRef = useRef(null);
	const [notificationOpen, setNotificationOpen] = useState(true);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				componentRef.current &&
				!componentRef.current.contains(event.target)
			) {
				setNotificationOpen(true);
				notifAnimation.start({ opacity: 0, x: 30 });
			}
		}
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	function handleNotifClick() {
		setNotificationOpen(!notificationOpen);

		if (notificationOpen === true) {
			notifAnimation.start({ opacity: 1, x: 0 });
		} else {
			notifAnimation.start({ opacity: 0, x: 30 });
		}
	}

	const navigate = useNavigate();
	return (
		<div ref={componentRef}>
			<IconButton onClick={() => handleNotifClick()}>
				<NotificationsNoneRoundedIcon color='primary' />
			</IconButton>
			<Card
				variant='outlined'
				component={motion.div}
				initial={{ opacity: 0, x: 30 }}
				animate={notifAnimation}
				transition={{ duration: 0.1 }}
				style={{
					borderRadius: 10,
					minWidth: 450,
					borderColor: '#333333',
					backgroundColor: 'primary.background',
					minHeight: 350,
					position: 'absolute',
					right: 50,
				}}
			>
				<Grid>
					<Grid
						padding={2}
						paddingTop={1.5}
						paddingBottom={0}
						container
						flexDirection='row'
						justifyContent='space-between'
						alignItems='center'
						marginBottom={4}
					>
						<Typography variant='h5' fontWeight='700'>
							Notifications
						</Typography>
						<IconButton
							component={Link}
							to={'/notifications'}
							onClick={handleNotifClick}
						>
							<LaunchRoundedIcon color='primary' />
						</IconButton>
					</Grid>

					<Grid
						component={motion.div}
						whileHover={{ x: 10 }}
						onClick={() => {
							navigate('/notifications'), handleNotifClick();
						}}
						container
						flexDirection='column'
						minHeight='100%'
						minWidth='100%'
						padding='8px 15.5px'
						sx={{ cursor: 'pointer' }}
					>
						<Grid>
							<Grid
								container
								sx={{
									color: 'secondary.text2',
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'start',
								}}
							>
								<Box>
									<Grid container flexDirection='row'>
										<img
											width={25}
											src={props.themeMode === 'dark' ? logo : logo_dark}
											opacity={0.3}
										/>
										<Typography
											textDecoration='none'
											fontWeight={300}
											marginLeft={1}
										>
											Digital Ascent
										</Typography>
									</Grid>
								</Box>
								<Typography fontWeight={300}>18 Oct</Typography>
							</Grid>
						</Grid>
						<Typography
							color='primary'
							fontWeight={400}
							marginLeft={0.5}
							marginTop={0.7}
							fontSize={18}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Typography>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
