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
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

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
			<motion.div
				variants={routeVariants}
				initial='initial'
				animate='final'>
				<Box>
					<Typography
						fontFamily='Monoton'
						variant='h1'
						fontSize={'clamp(30px, 20vw, 105px)'}
						fontWeight={400}
						color='primary'
						userSelect='none'>
						DIGITAL ASCENT
					</Typography>
				</Box>
			</motion.div>
		</Grid>
	);
}

export default Homepage;
