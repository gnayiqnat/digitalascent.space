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
import { motion } from 'framer-motion';

function Homepage(props) {
	return (
		<motion.div
			variants={props.routeVariants}
			initial='initial'
			animate='final'>
			<Section1 />
		</motion.div>
	);
}

function Section1() {
	return (
		<Container
			component='main'
			maxWidth='sm'
			sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<Typography
				lineHeight={0.88}
				fontFamily='Monoton'
				variant='h1'
				fontSize={'clamp(30px, 15vw, 105px)'}
				fontWeight={400}
				userselect='none'>
				DIGITAL <Box marginLeft={10}>ASCENT</Box>
			</Typography>
		</Container>
	);
}

export default Homepage;
