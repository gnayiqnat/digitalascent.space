import {
	Box,
	Typography,
	Grid,
} from '@mui/material';

import { Link as RouterLink, useLocation } from 'react-router-dom';

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
					<Grid item>
						<Typography
							component={RouterLink}
							key={e}
							to={e.url}
							sx={{
								color: e.url == windowURL ? 'primary.text' : 'secondary.text',
								fontFamily: 'Public Sans',
								fontWeight: 300,
								fontSize: 18,
								textDecoration: 'none',
								transition: 'all ease 0.3s',
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
