import { Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Loading(props) {
    const [loadingPercentage, setLoadingPercentage] = useState(0)

    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            
            setTimeout(() => {
                setLoadingPercentage(i)
            }, 200);
        }   
		setTimeout(() => {
			props.setHasLoaded(true);
		}, 5000);
	}, []);

	return (
		<>
			<motion.div initial={{opacity: 0, scale: 0.7}} >
				<Typography variant='h6' fontWeight={200}>
					 sf
				</Typography>
			</motion.div>
		</>
	);
}
