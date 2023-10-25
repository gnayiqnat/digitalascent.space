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
import { motion } from 'framer-motion';
import * as React from 'react';

export default function Games(props) {
	return (
		<>
			<motion.div
				variants={props.routeVariants}
				initial='initial'
				animate='final'
			>
				<GamesSec1 />
			</motion.div>
		</>
	);
}

function GamesSec1() {
	return (
		<>
			<Typography
				component={motion.div}
				fontFamily='Monoton'
				variant='h3'
				align='center'
				sx={{ marginTop: 14 }}
				gutterBottom
			>
				GAMES
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={8} sx={{ backgroundColor: 'red'}}></Grid>
				<Grid item xs={4} sx={{backgroundColor: 'blue'}}></Grid>
				<Grid item></Grid>
			</Grid>
		</>
	);
}
