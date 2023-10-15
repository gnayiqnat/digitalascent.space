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
				animate='final'>
				<GamesSec1 />
			</motion.div>
		</>
	);
}

function GamesSec1() {
	return (
		<>
			<Typography fontFamily='Monoton' variant='h3' align='center'>
				GAMES
			</Typography>
		</>
	);
}
