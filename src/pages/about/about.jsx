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
			<Container
				style={{
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
			</Container>
		</>
	);
}
