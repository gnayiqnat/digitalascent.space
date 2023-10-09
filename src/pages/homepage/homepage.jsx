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
	Container,
} from '@mui/material';
import './homepage.css';
import { createTheme, ThemeProvider } from '@mui/material';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';


function Homepage() {
	return (
		<>
			<Section1 />
		</>
	);
}

function Section1() {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{ minHeight: '80vh' }}>
			<Typography
				fontFamily='Monoton'
				variant='h1'
				fontWeight={400}
				color='primary'
				marginTop={-15}>
				DIGITAL ASCENT
			</Typography>
		</Grid>
	);
}

export default Homepage;
