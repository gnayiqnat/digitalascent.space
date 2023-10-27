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
import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { render } from 'react-dom';
import { useMediaQuery } from 'react-responsive';

function Homepage(props) {
	return (
		<motion.div
			variants={props.routeVariants}
			initial='initial'
			animate='final'
		>
			<Section1 />
		</motion.div>
	);
}

function Section1() {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<>
			<Container
				component='main'
				maxWidth='sm'
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 14,
				}}
			>
				{isMobile ? (
					<Box>
							<DigitalAscent />
					</Box>
				) : (
					<motion.div
						width={300}
						height={200}
					>
						<DigitalAscent />
					</motion.div>
				)}
			</Container>
		</>
	);
}

export default Homepage;

function DigitalAscent() {
	const digitalAscent = ['DIGITAL', 'ASCENT'];

	return (
		<>
			<Grid container flexDirection='column' overflow
>
				<Box>
					<Grid container flexDirection='row'>
						{Array.from(digitalAscent[0]).map((e) => (
							<motion.div
								drag
							>
								<Typography

									lineHeight={0.88}
									fontFamily='Monoton'
									variant='h1'
									fontSize={'clamp(30px, 15vw, 105px)'}
									fontWeight={400}
									cursor='pointer'
								>
									{e}
								</Typography>
							</motion.div>
						))}
					</Grid>
				</Box>
				<Box>
					<Grid container flexDirection='row'>
						{Array.from(digitalAscent[1]).map((e) => (
							<motion.div
								drag
							>
								<Typography
									lineHeight={0.88}
									fontFamily='Monoton'
									variant='h1'
									fontSize={'clamp(30px, 15vw, 105px)'}
									fontWeight={400}
									cursor='pointer'
								>
									{e}
								</Typography>
							</motion.div>
						))}
					</Grid>
				</Box>
			</Grid>
		</>
	);
}
