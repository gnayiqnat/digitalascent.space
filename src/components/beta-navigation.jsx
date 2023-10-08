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
import { useState } from 'react';
import logo from '../assets/logo.jpeg';

export default function NavTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (_e, newValue) => {
		setValue(newValue);
	};

	return (
		<AppBar style={{ background: '#000016', position: 'relative' }}>
			<Toolbar
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					height: '60px',
				}}>
				<Button>
					<img src={logo} style={{ marginTop: 5 }} width='50px' />
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
								bottom: 0,
                                marginLeft: '4.5%',
								height: 3,
                                maxWidth: 60,
								borderRadius: 10,
							},
						}}>
						<Tab
							label='Home'
							index={0}
							component={RouterLink}
							to={'/'}
							sx={{ color: '#ffffff' }}
						/>
						<Tab
							label='Games'
							index={1}
							component={RouterLink}
							to={'/games'}
							sx={{ color: '#ffffff' }}
						/>{' '}
						<Tab
							label='Credits'
							index={1}
							component={RouterLink}
							to={'/credits'}
							sx={{ color: '#ffffff'}}
						/>{' '}
						<Tab
							label='About'
							index={1}
							component={RouterLink}
							to={'/about'}
							sx={{ color: '#ffffff' }}
						/>
					</Tabs>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
