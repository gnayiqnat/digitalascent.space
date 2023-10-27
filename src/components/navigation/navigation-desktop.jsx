import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import {
	Box,
	IconButton,
	AppBar,
	Toolbar,
	Typography,
	Grid,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { motion, useAnimation, useAnimationControls } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';

export default function NavDesktop() {
	const windowURL = useLocation().pathname;
	const routes = [
		{ name: 'Home', url: '/' },
		{ name: 'Games', url: '/games' },
		{ name: 'Credits', url: '/credits' },
		{ name: 'About', url: '/about' },
	];

	return (
		<Box sx={{ marginLeft: -8 }}>
			<Grid container spacing={4}>
				{routes.map((e) => (
					<Grid item sx={{ marginTop: e.url == windowURL ? 0.6 : 0,marginBottom: e.url == windowURL ? -0.6 : 0, transition: 'all ease 0.5s' }}>
						<Typography
							component={RouterLink}
							key={e}
							to={e.url}
							sx={{
								color: e.url == windowURL ? 'primary.text' : 'secondary.text',
								fontFamily: 'Public Sans',
								fontWeight: 300,
								fontSize: 20,
								textDecoration: 'none',
								transition: 'all ease 0.5s',
							}}
						>
							{e.name}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
