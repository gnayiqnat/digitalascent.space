import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Notifications(props) {
	return (
		<>
			<motion.div
				variants={props.routeVariants}
				initial='initial'
				animate='final'
			>
				<Typography
					fontFamily='Monoton'
					variant='h3'
					align='center'
					sx={{ marginTop: 14 }}
				>
					NOTIFICATIONS
				</Typography>
			</motion.div>
		</>
	);
}
