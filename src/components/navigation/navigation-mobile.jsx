import {Box, Button, IconButton, Drawer, Grid } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../logo';

const routes = [
	{ name: 'Home', url: '/' },
	{ name: 'Games', url: '/games' },
	{ name: 'Credits', url: '/credits' },
	{ name: 'About', url: '/about' },
];
export default function MobileNavigation(props) {
	return (
		<>
			<IconButton
				onClick={() => {
					props.setIsDrawerOpen(true);
				}}
			>
				<MenuRoundedIcon fontSize='large' color={'primary'} />
			</IconButton>

			<Drawer
				anchor='right'
				open={props.isDrawerOpen}
				onClose={() => {
					props.setIsDrawerOpen(false);
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
						onClick={() => props.setIsDrawerOpen(false)}
					>
						<Logo themeMode={props.themeMode} setIsDrawerOpen={props.setIsDrawerOpen} />
					</Box>
					<Grid container flexDirection='column' marginTop={'10vh'}>
						{routes.map((e) => (
							<Button
								key={e}
								style={{
									height: 'clamp(60px, 10vh, 150px)',
									fontSize: '1.5rem',
									fontWeight: 300,
								}}
								component={RouterLink}
								to={e.url}
								onClick={() => {
									props.setIsDrawerOpen(false);
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
