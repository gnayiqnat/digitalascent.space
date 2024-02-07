import {
	Typography,
	Box,
	Grid,
	LinearProgress,
	Avatar,
	Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const team = [
	{
		avatar: './pfp/ipomom.png',
		username: 'Ipomom',
		roles: '3D Designer',
		links: 'https://wonk6820.artstation.com/projects',
	},
	{
		avatar: './pfp/delta.png',
		username: 'Delta',
		roles: 'VFX Designer',
	},

	{
		avatar: 'https://avatars.githubusercontent.com/u/133224159?v=4',
		username: 'gnayiqnat',
		roles: 'Digital Marketer',
		links: 'https://gnayiqnat.vercel.app',
	},
	{
		avatar: './pfp/ben.jpg',
		username: 'benjamintjm',
		roles: 'Game Tester',
		links: 'https://github.com/benjamintjm',
	},
	{
		username: 'lonelyalive',
		roles: 'Sound Designer',
	},
	{
		avatar: './pfp/luke.png',
		username: 'luke',
		roles: 'GUI Designer',
	},
];

export default function Credits(props) {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const [allImageshasLoaded, setAllImagesHasLoaded] = useState(false);
	const numberOfImgLoaded = useRef(0);
	const [loadingProgress, setLoadingProgress] = useState(1);

	function addNumLoaded() {
		if (document.cookie.includes('creditsImgLoaded=true')) {
			return;
		} else {
			numberOfImgLoaded.current++;
		}
	}
	useEffect(() => {
		let numberOfTeamWithAvatar = 0;
		team.map((e) => {
			if (e.avatar) {
				numberOfTeamWithAvatar++;
			}
		});
		if (document.cookie.includes('creditsImgLoaded=true')) {
			setAllImagesHasLoaded(true);
			return;
		} else {
			const timer = setInterval(() => {
				setLoadingProgress((oldProgress) => {
					if (oldProgress === 100) {
						if (numberOfImgLoaded.current === numberOfTeamWithAvatar) {
							setAllImagesHasLoaded(true);
							document.cookie =
								'creditsImgLoaded=true; SameSite=Strict; Secure';
						}
						return 100;
					}
					return (numberOfImgLoaded.current / numberOfTeamWithAvatar) * 100;
				});
			}, 500);
			return () => {
				clearInterval(timer);
			};
		}
	}, []);

	return (
		<>
			{!allImageshasLoaded && (
				<>
					<Box
						sx={{
							width: '100vw',
							height: '100dvh',
							position: 'absolute',
							disabled: 'disabled', // disable cursor passthrough
							zIndex: 2,
							left: 0,
							top: 0,
							backgroundColor: 'background.paper',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100dvh',
							}}
						>
							<LinearProgress
								variant='determinate'
								value={loadingProgress}
								sx={{
									display: 'inline-block',
									width: '40vw',
									height: '7px',
									borderRadius: '30px',
								}}
							/>
							<Typography
								onClick={() => {
									setAllImagesHasLoaded(true);
								}}
								variant='h6'
								sx={{
									fontWeight: '300',
									color: 'primary.main',
									opacity: 0.8,
									marginTop: 5,
									cursor: 'pointer',
								}}
								gutterBottom
							>
								Having trouble entering? Click here. (Some assets may be missing)
							</Typography>
						</Box>
					</Box>
				</>
			)}
			<motion.div
				variants={props.routeVariants}
				initial='initial'
				animate='final'
			>
				<section
					style={{
						maxWidth: '850px',
						margin: 'auto',
						padding: isMobile ? '0px 0px 50px 0px' : '0px 10px 50px 10px',
					}}
				>
					<Grid
						container
						sx={{
							flexDirection: 'row',
							justifyContent: 'center',
							gap: isMobile ? 4 : 10,
							marginTop: '60px',
						}}
					>
						{team.map((e, i) => (
							<Grid item key={i}>
								<a
									target='_blank'
									href={e.links}
									style={{ textDecoration: 'none' }}
								>
									<motion.div
										initial={{ opacity: 1, scale: isMobile ? 0.9 : 1 }}
										whileHover={{ opacity: e.links ? 0.5 : 1 }}
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											padding: '0px 5px',

											minWidth: '150px',
											maxWidth: '150px',
											whiteSpace: 'nowrap',
										}}
									>
										{e.avatar ? (
											<img
												src={e.avatar}
												onLoad={() => {
													addNumLoaded();
												}}
												style={{
													borderRadius: '50%',
													width: 100,
													height: 100,
													marginBottom: 2,
												}}
											/>
										) : (
											<Avatar
												style={{
													width: 100,
													height: 100,
													marginBottom: 2,
												}}
											/>
										)}
										<Typography
											align='center'
											sx={{
												fontSize: 27,
												fontWeight: '500',
												color: 'primary.main',
											}}
										>
											{e.username}
										</Typography>
										<Typography
											sx={{
												color: 'primary.main',
												opacity: 0.6,
												fontSize: 18,
												fontWeight: '400',
												marginTop: -0.5,
											}}
										>
											{e.roles}
										</Typography>
									</motion.div>
								</a>
							</Grid>
						))}
					</Grid>
				</section>
			</motion.div>
		</>
	);
}
