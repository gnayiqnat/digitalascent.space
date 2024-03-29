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
import GamesSec from './gamesSec';

export default function Games(props) {
	return (
		<>
			<motion.div
				variants={props.routeVariants}
				initial='initial'
				animate='final'
			>
				{/*
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
				 */}
				<GamesSec />
			</motion.div>
		</>
	);
}
