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

import './homepage.css';

import { createTheme, ThemeProvider } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';

const theme = createTheme({
	palette: {
		primary: { main: '#FFFFFF' },
		background: { default: '#000016' },
	},
});

function Section1() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: '88vh' }}>
				<Typography
					fontFamily='Monoton'
					variant='h1'
					fontWeight={400}
					color='primary'
					gridRow='1 / span 3'>
					DIGITAL ASCENT
				</Typography>
			</Grid>
		</ThemeProvider>
	);
}

export default Section1;
