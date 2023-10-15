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

export default function Credits(props) {
	return (
		<motion.div
			variants={props.routeVariants}
			initial='initial'
			animate='final'>
			<CreditsSec1 />
		</motion.div>
	);
}

function CreditsSec1() {
	return (
		<>
			<Typography fontFamily='Monoton' variant='h3' align='center'>
				CREDITS
			</Typography>
		</>
	);
}
