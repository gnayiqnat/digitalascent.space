import { Typography, Grid, Card, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const games = [
	{
		name: 'Down to Earth',
		link: 'down-to-earth',
		gamePeek: './dte-peek.png',
	},
];

export default function GamesSec({homepage}) {
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<>
			<Grid
				container
				sx={{
					width: '100vw',
					height: '100dvh',
					backgroundColor: homepage === true && 'primary.color',
					padding: homepage === true ? '90px 30px' : ' 45px 30px',

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
								color: 'secondary.main',
								marginLeft: '7px',
							}}
						>
							A single-player FPS action-adventure game centered around the
							theme of renewable and green energy.
						</Typography>
						<br />
						<Box sx={{ display: 'flex', justifyContent: 'end' }}>
							<Button
								onClick={() => {
									window.open(
										'https://www.roblox.com/games/15127205237/Down-to-Earth',
										'_blank'
									);
								}}
								sx={{
									backgroundColor: '#007566',
									textTransform: 'none',
									padding: '10px 19px',
								}}
							>
								<Typography
									sx={{
										fontFamily: 'Nunito',
										fontWeight: '700',
										fontSize: '17px',
										letterSpacing: 0.4,
										opacity: 0.7,
										color: 'white',
									}}
								>
									PLAY
								</Typography>
							</Button>
							{/* <Button
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
							</Button> */}
						</Box>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}
