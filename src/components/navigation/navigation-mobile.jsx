import {
	Box,
	Button,
	IconButton,
	Drawer,
	Grid,
	Container,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from '../logo';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AnimatePresence, motion } from 'framer-motion';

const routes = [
	{ name: 'Home', url: '/' },
	{ name: 'Games', url: '/games' },
	{ name: 'Credits', url: '/credits' },
	{ name: 'About', url: '/about' },
];
export default function MobileNavigation(props) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const windowURL = useLocation().pathname;

	return (
		<>
			<IconButton
				onClick={() => {
					setIsDrawerOpen(!isDrawerOpen);
				}}
			>
				<MenuRoundedIcon fontSize='large' color={'primary'} />
			</IconButton>
			<AnimatePresence>
				{isDrawerOpen && (
					<motion.div
						key='mobileNav'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 0.15, duration: 0.25 }}
					>
						<Grid
							container
							sx={{
								position: 'fixed',
								top: 0,
								left: 0,
								width: '100vw',
								height: '100dvh',
								backgroundColor: 'background.paper',
								overflow: 'hidden',

								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',

								flexDirection: 'column',
							}}
						>
							{' '}
							<IconButton
								sx={{
									position: 'absolute',
									top: 0,
									right: 0,
									margin: '30px',
								}}
								onClick={() => {
									setIsDrawerOpen(!isDrawerOpen);
								}}
							>
								<CloseRoundedIcon fontSize='large' />
							</IconButton>
							{routes.map((e, i) => (
								<Grid item key={i}>
									<Button
										sx={{
											height: 'clamp(60px, 10vh, 150px)',
											width: '80vw',
											maxWidth: '450px',
											fontSize: '1.5rem',
											fontWeight: windowURL == e.url ? 400 : 300,
											color:
												windowURL == e.url ? 'primary.main' : 'secondary.main',
										}}
										component={RouterLink}
										to={e.url}
										onClick={() => {
											setIsDrawerOpen(false);
										}}
									>
										{e.name}
									</Button>
								</Grid>
							))}
						</Grid>
					</motion.div>
				)}{' '}
			</AnimatePresence>
		</>
	);
}
