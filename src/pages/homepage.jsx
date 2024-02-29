import { Typography, Box, Grid, Container, Button, Card } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import GamesSec from './gamesSec';
import { useNavigate } from 'react-router-dom';

export default function Homepage(props) {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	return (
		<motion.div
			variants={props.routeVariants}
			initial='initial'
			animate='final'
		>
			<Section1 isMobile={isMobile} />
			<Section2 isMobile={isMobile} />
		</motion.div>
	);
}

function Section1({ isMobile }) {
	const [hasRun, setHasRun] = useState(false);
	const top = useAnimationControls();
	const bottom = useAnimationControls();

	const navigate = useNavigate();

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
				flexDirection: 'column',
				userSelect: 'none',
				height: '60dvh',
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

function Section2({ isMobile }) {
	const navigate = useNavigate();

	return (
		<>
			<Box
				sx={{ marginTop: isMobile ? '-20dvh' : '-23dvh', marginBottom: '-9px' }}
			>
				{' '}
				<img src='/wave.svg' />
			</Box>
			<GamesSec homepage={true} />
		</>
	);
}

const headerStyle = {
	lineHeight: 0.88,
	fontFamily: 'Monoton',
	variant: 'h1',
	fontSize: 'clamp(30px, 15vw, 105px)',
	fontWeight: 400,
	cursor: 'pointer',
};
