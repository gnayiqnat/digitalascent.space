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
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useState } from 'react';

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
	const [buttonHasClicked, setButtonHasClicked] = useState(false);
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{ marginTop: '13vh' }}>
			<Box>
				<Typography
					fontFamily='Monoton'
					variant='h1'
					fontSize={'clamp(30px, 20vw, 105px)'}
					fontWeight={400}
					color='primary'
					userSelect='none'>
					DIGITAL ASCENT
				</Typography>
			</Box>
		</Grid>
	);
}

export default Homepage;
