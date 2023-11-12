import { Box, Button, IconButton, Drawer, Grid } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from '../logo';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const routes = [
	{ name: 'Home', url: '/' },
	{ name: 'Games', url: '/games' },
	{ name: 'Credits', url: '/credits' },
	{ name: 'About', url: '/about' },
];
export default function MobileNavigation(props) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 950px)' });
	const windowURL = useLocation().pathname;

	useEffect(() => {
		if (isDrawerOpen && isMobile) {
			props.scaleDown.start({
				scale: 0.85,
				transition: { delay: 0.05 },
			});
		} else if (!isDrawerOpen) {
			props.scaleDown.start({ scale: 1, transition: { delay: 0.05 } });
		} else {
			setIsDrawerOpen(false);
			props.scaleDown.start({ scale: 1 });
		}
	});

	return (
		<>
			<IconButton
				onClick={() => {
					setIsDrawerOpen(true);
				}}
			>
				<MenuRoundedIcon fontSize='large' color={'primary'} />
			</IconButton>

			<Drawer
				anchor='right'
				open={isDrawerOpen}
				onClose={() => {
					setIsDrawerOpen(false);
				}}
			>
				<Box
					width={250}
					backgroundColor='primary.background.default'
					height='100vh'
					role='presentation'
				>
					<Box
						display='flex'
						justifyContent='start'
						alignItems='center'
						padding={1.5}
						onClick={() => setIsDrawerOpen(false)}
					>
						<Logo
							themeMode={props.themeMode}
							setIsDrawerOpen={setIsDrawerOpen}
						/>
					</Box>
					<Grid container flexDirection='column' marginTop={'10vh'}>
						{routes.map((e, i) => (
							<Button
								key={i}
								sx={{
									height: 'clamp(60px, 10vh, 150px)',
									fontSize: '1.5rem',
									fontWeight: windowURL == e.url ? 400 : 300,
									color: windowURL == e.url && 'primary.color',
								}}
								component={RouterLink}
								to={e.url}
								onClick={() => {
									setIsDrawerOpen(false);
								}}
							>
								{e.name}
							</Button>
						))}
					</Grid>
				</Box>
			</Drawer>
		</>
	);
}
