import { Box, Button, Typography } from '@mui/material';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ComingSoon(props) {
	const navigate = useNavigate();
	return (
		<motion.div
			variants={props.routeVariants}
			initial='initial'
			animate='final'
		>
			<Box
				sx={{
					display: 'flex',
					height: '70dvh',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Box
					sx={{
						flexDirection: 'row',
						display: 'flex',
						alignItems: 'center',
						gap: 1,
					}}
				>
					<ConstructionRoundedIcon sx={{ fontSize: '50px' }} />
					<Typography variant='h2'> Coming soon </Typography>
				</Box>
				<Typography
					variant='h6'
					align='center'
					sx={{
						fontWeight: '300',
						color: 'primary.main',
						opacity: 0.8,
						maxWidth: '450px',
					}}
				>
					In the meantime, learn more about Digital Ascent by visiting our About
					page.
				</Typography>

				<Box sx={{ marginTop: '25px' }}>
					<Button
						onClick={() => {
							navigate('/about');
						}}
						sx={{
							padding: '10px',
							textTransform: 'none',
							color: 'primary.color',
							gap: '5px',

							borderStyle: 'solid',
							borderColor: 'primary.color',
							borderWidth: '2px',
							borderRadius: '10px',
						}}
					>
						<Typography variant='h6' sx={{ fontWeight: '400' }}>
							Learn more about us
						</Typography>
					</Button>
				</Box>
			</Box>
		</motion.div>
	);
}
