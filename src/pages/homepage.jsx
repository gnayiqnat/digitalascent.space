import { Typography, Box, Grid, Container, Button, Card } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import GamesSec from './gamesSec';
import { useNavigate } from 'react-router-dom';

function Homepage(props) {
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
				sx={{ marginTop: isMobile ? '-20dvh' : '-23dvh', marginBottom: '-7px' }}
			>
				{' '}
				<img src='/wave.svg' />
			</Box>
			<Grid
				container
				sx={{
					width: '100vw',
					height: '100dvh',
					backgroundColor: 'primary.color',
					padding: '90px 30px',

					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Grid item>
					<Card
						sx={{
							width: isMobile ? '90vw' : '50vw',
							padding: ' 26px 35px',

							borderRadius: '10px',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Nunito',
								fontWeight: '600',
								fontSize: '30px',
								opacity: 0.9,
							}}
						>
							Down to Earth
						</Typography>
						<Typography
							gutterBottom
							sx={{
								fontSize: '20px',
								lineHeight: 1.2,
								opacity: 0.35,
								marginLeft: '7px',
							}}
						>
							A single-player FPS action-adventure game centered around the
							theme of renewable and green energy.
						</Typography>
						<br />
						<Box sx={{ display: 'flex', justifyContent: 'end' }}>
							<Button
								onClick={() => {window.open(
									'https://www.roblox.com/games/15127205237/Down-to-Earth',
									'_blank'
								)}}
								sx={{
									backgroundColor: '#007566',
									textTransform: 'none',
									padding: '7px 17px',
								}}
							>
								<Typography
									sx={{
										fontFamily: 'Nunito',
										fontWeight: '700',
										fontSize: '17px',
										letterSpacing: 0.4,
										opacity: 0.7,
									}}
								>
									PLAY
								</Typography>
							</Button>
							<Button
								onClick={() => {
									navigate('/games/down-to-earth');
								}}
								sx={{
									marginLeft: '12px',
									backgroundColor: 'rgba(0,117,102, 0.1)',
									padding: '7px 16px',
									borderWidth: '3px',
									borderStyle: 'solid',
									borderColor: '#007566',
								}}
							>
								<Typography
									sx={{
										fontFamily: 'Nunito',
										fontWeight: '700',
										fontSize: '17px',
										letterSpacing: 0.4,
										color: '#007566',
									}}
								>
									LEARN MORE
								</Typography>{' '}
							</Button>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</>
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
