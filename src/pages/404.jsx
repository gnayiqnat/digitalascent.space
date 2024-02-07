import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					height: '70dvh',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Typography variant='h2'>404 Not found.</Typography>
				<Typography
					variant='h6'
					sx={{ fontWeight: '300', color: 'primary.main', opacity: 0.8 }}
				>
					Are you sure you have typed the correct URL?
				</Typography>

				<Box sx={{ marginTop: '50px' }}>
                    <Button
                        onClick={()=> {navigate('/')}}
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
							Go to the home page
						</Typography>
					</Button>
				</Box>
			</Box>
		</>
	);
}
