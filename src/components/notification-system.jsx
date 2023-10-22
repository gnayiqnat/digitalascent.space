import { Box, Card, Grid, IconButton, Typography } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Logo from './logo';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

export default function NotificationSystem(props) {
	const notifAnimation = useAnimationControls();
	const componentRef = useRef(null);
	const [notificationOpen, setNotificationOpen] = useState(true);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				componentRef.current &&
				!componentRef.current.contains(event.target)
			) {
				setNotificationOpen(true);
				notifAnimation.start({ opacity: 0, x: 30 });
			}
		}
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	function handleNotifClick() {
		setNotificationOpen(!notificationOpen);

		if (notificationOpen === true) {
			notifAnimation.start({ opacity: 1, x: 0 });
		} else {
			notifAnimation.start({ opacity: 0, x: 30 });
		}
	}

	const navigate = useNavigate();
	return (
		<div ref={componentRef}>
			<IconButton onClick={() => handleNotifClick()}>
				<NotificationsNoneRoundedIcon color='primary' />
			</IconButton>
			<Card
				variant='outlined'
				component={motion.div}
				initial={{ opacity: 0, x: 30 }}
				animate={notifAnimation}
				transition={{ duration: 0.1 }}
				style={{
					borderRadius: 10,
					minWidth: 450,
					borderColor: '#333333',
					backgroundColor: 'primary.background',
					minHeight: 350,
					position: 'absolute',
					right: 50,
				}}
			>
				<Grid>
					<Grid
						padding={2}
						paddingTop={1.5}
						paddingBottom={0}
						container
						flexDirection='row'
						justifyContent='space-between'
						alignItems='center'
						marginBottom={4}
					>
						<Typography variant='h5' fontWeight='700'>
							Notifications
						</Typography>
						<IconButton
							component={RouterLink}
							to={'/notifications'}
							onClick={handleNotifClick}
						>
							<LaunchRoundedIcon color='primary' />
						</IconButton>
					</Grid>

					<Grid
						component={motion.div}
						whileHover={{ x: 10 }}
						onClick={() => {
							navigate('/notifications'), handleNotifClick();
						}}
						container
						flexDirection='column'
						minHeight='100%'
						minWidth='100%'
						padding='8px 15.5px'
						sx={{ cursor: 'pointer' }}
					>
						<Grid>
							<Grid
								container
								sx={{
									color: 'secondary.text2',
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'start',
								}}
							>
								<Box>
									<Grid container flexDirection='row'>
										<Logo isNotification={true} themeMode={props.themeMode} />
										<Typography
											textDecoration='none'
											fontWeight={300}
											marginLeft={1}
										>
											Digital Ascent
										</Typography>
									</Grid>
								</Box>
								<Typography fontWeight={300}>18 Oct</Typography>
							</Grid>
						</Grid>
						<Typography
							color='primary'
							fontWeight={400}
							marginLeft={0.5}
							marginTop={0.7}
							fontSize={18}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Typography>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
