import { Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function GamesSec() {
	return (
		<>
			<GridItem />
		</>
	);
}

const games = [
	{
		name: 'Down to Earth',
		link: 'down-to-earth',
		gamePeek: './dte-peek.png',
	},
];
function GridItem() {
	const navigate = useNavigate();

	return (
		<>
			<Grid container sx={{padding: '40px 10px'}}>
				{games.map((e, i) => (
					<Grid
						key={i}
						item
						sx={{
							padding: 1.5,
							borderRadius: 3,
							width: '330px',
							maxWidth: '80vw',
							cursor: 'pointer'
						}}
					>
						<motion.div
							initial={{ opacity: 1 }}
							whileHover={{ opacity: 0.5 }}
							draggable='false'
							target='_blank'
							style={{ width: '330px', maxWidth: '80vw' }}
							onClick={() => {
								navigate(`/games/${e.link}`);
							}}
						>
							<img
								draggable='false'
								style={{
									height: '175px',
									width: '300px',
									maxWidth: '80vw',
									borderRadius: '7px',
								}}
								src={e.gamePeek}
							/>
						</motion.div>
					</Grid>
				))}
			</Grid>
		</>
	);
}
