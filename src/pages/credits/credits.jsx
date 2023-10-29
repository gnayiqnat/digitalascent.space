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
	Avatar,
	Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import OurTeam from './ourTeam';

export default function Credits(props) {
	return (
		<motion.div
			variants={props.routeVariants}
			initial='initial'
			animate='final'
		>
			<Box sx={{ marginTop: 4 }}>
				<section>
					<Typography
						variant='h2'
						align='center'
						fontFamily='Monoton'
						gutterBottom
					>
						OUR{' '}
						<Box
							sx={{
								color: 'primary.color',
								display: 'inline-block',
								marginLeft: 1,
							}}
						>
							TEAM
						</Box>
					</Typography>
					<Grid container sx={{ flexDirection: 'row'}}>
						<OurTeam />
					</Grid>
				</section>
			</Box>
		</motion.div>
	);
}
