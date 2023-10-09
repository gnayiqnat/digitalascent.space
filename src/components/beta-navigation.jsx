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

	const windowURL = window.location.href
	useEffect(() => {if (windowURL.includes('/games')) {
		setValue(1)
	} else if (windowURL.includes('credits')) {
		setValue(2)
	} else if (windowURL.includes('about')) {
		setValue(3)
	}})
	
	return (
		<AppBar style={{marginTop:15 ,background: '#000016', position: 'relative' }}>
			<Toolbar
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					height: '60px',
				}}>
				<Button LinkComponent={RouterLink} to='/'onClick={() => {setValue(0)}}>
					<img src={logo} style={{marginLeft: 5, marginTop: 0 }} width='65px' />
				</Button>
				<Box>
					<Tabs
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
						<Tab disableRipple
							label='Home'
							index={0}
							component={RouterLink}
							to={'/'}
							sx={{ color: '#ffffff' }}
						/>
						<Tab disableRipple
							label='Games'
							index={1}
							component={RouterLink}
							to={'/games'}
							sx={{ color: '#ffffff' }}
						/>{' '}
						<Tab disableRipple
							label='Credits'
							index={1}
							component={RouterLink}
							to={'/credits'}
							sx={{ color: '#ffffff'}}
						/>{' '}
						<Tab disableRipple
							label='About'
							index={1}
							component={RouterLink}
							to={'/about'}
							sx={{ color: '#ffffff' }}
						/>
					</Tabs>
					<Button variant=''>Sign up</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
