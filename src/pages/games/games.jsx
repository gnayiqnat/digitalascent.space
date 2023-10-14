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
const routeVariants = {
	initial: {
		y: '5vh',
		opacity: 0,
	},
	final: {
		y: '0vh',
		opacity: 1,
	},
};
export default function Games() {
	return (
		<>
			<motion.div
				variants={routeVariants}
				initial='initial'
				animate='final'><Typography variant='h3' fontFamily='Monoton' textAlign='center'>GAMES</Typography></motion.div>
		</>
	);
}
