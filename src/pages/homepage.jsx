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
import { useMediaQuery } from 'react-responsive';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

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
	const [hasRun, setHasRun] = useState(false);
	const top = useAnimationControls();
	const bottom = useAnimationControls();
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	function handleHover() {
		if (hasRun === false) {
			top.start({ x: -100 });
			bottom.start({ x: 100 });
			setHasRun(true);
		} else {
			top.start({ x: 0 });
			bottom.start({ x: 0 });
			setHasRun(false);
		}
	}

	return (
		<Container
			component='main'
			maxWidth='sm'
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				userSelect: 'none',
				marginTop: 14,
			}}
		>
			{isMobile ? (
				<Box>
					<Typography sx={headerStyle}>DIGITAL</Typography>
					<Box marginLeft={3} color='primary.color'>
						<Typography sx={headerStyle}>ASCENT</Typography>
					</Box>
				</Box>
			) : (
				<motion.div
					width={300}
					height={200}
					onHoverStart={handleHover}
					onHoverEnd={handleHover}
				>
					<Typography component={motion.div} animate={top} sx={headerStyle}>
						DIGITAL
					</Typography>
					<Typography
						component={motion.div}
						animate={bottom}
						sx={headerStyle}
						marginLeft={13}
						color='primary.color'
					>
						ASCENT
					</Typography>
				</motion.div>
			)}
		</Container>
	);
}

export default Homepage;

const headerStyle = {
	lineHeight: 0.88,
	fontFamily: 'Monoton',
	variant: 'h1',
	fontSize: 'clamp(30px, 15vw, 105px)',
	fontWeight: 400,
	cursor: 'pointer',
};
