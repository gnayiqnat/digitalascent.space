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
			<GridItem />
		</>
	);
}

function GridItem() {
	return (
		<>
			<Grid container>
				<Grid
					item
					sx={{
						opacity: 0.6,
						padding: 1.5,
						borderRadius: 3,
						width: '330px',
						maxWidth: '80vw',
					}}
				>
					<a
						draggable='false'
						target='_blank'
						href='/down-to-earth'
						style={{ width: '330px', maxWidth: '80vw' }}
					>
						<img
							draggable='false'
							style={{
								width: '300px',
								maxWidth: '80vw',
								borderRadius: '7px',
							}}
							src='./dte-peek.png'
						/>
					</a>
				</Grid>{' '}
			</Grid>
		</>
	);
}
