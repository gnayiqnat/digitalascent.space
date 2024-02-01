import {
	Typography,
	Container,
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

export default function About(props) {
	return (
		<motion.div
			variants={props.routeVariants}
			initial='initial'
			animate='final'
		>
			<AboutSec1 />
		</motion.div>
	);
}

function AboutSec1() {
	return (
		<>
			<Grid
				container
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				 <Typography
					gutterBottom
					variant='h3'
					align='center'
					fontFamily='Monoton'
					sx={{ marginTop: 14 }}
				>
					ABOUT
				</Typography>
				 
				<Box sx={{ maxWidth: 700, margin:'auto'}}>
					<Typography
						align='center'
						sx={{ fontSize: 22, color: 'primary.main', opacity: 0.6 }}
					>
						Ever had a sudden genius concept for a game in the shower? You
						probably don't, but we did. We are a small group of aspiring game
						devs who got together to create games stemmed from showerthoughts.
					</Typography>
				</Box>
			</Grid>
		</>
	);
}
