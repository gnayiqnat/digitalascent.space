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

function Credits() {
	return (
		<motion.div
			variants={routeVariants}
			initial='initial'
			animate='final'
			>
			<Typography
				fontFamily='Monoton'
				variant='h3'
				align='center'>
				CREDITS
			</Typography>
		</motion.div>
	);
}

export default Credits;
