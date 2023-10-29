import {
	Typography,
	Button,
	IconButton,
	Fab,
	Box,
	AppBar,
	Toolbar,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	Grid,
	Paper,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	CssBaseline,
	Avatar,
	Container,
} from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';

/* Icons */
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

/* Profile pictures */
import ipomomPfp from '../../assets/profile-picture/ipomom-pfp.png';
import deltaPfp from '../../assets/profile-picture/delta-pfp.png';
import { Link } from 'react-router-dom';

const team = [
	{
		avatar: ipomomPfp,
		username: 'Ipomom',
		roles: ['3D Designer'],
		description: `Hi, i am Ipomom. I am the team's character designer, map designer, choreographer and concept artist.`,
		icons: ['homepage'],
		links: ['https://wonk6820.artstation.com/projects'],
	},
	{
		avatar: deltaPfp,
		username: 'Delta',
		roles: ['VFX Designer'],
		description: `Hi, I'm delta. I do modeling, visual effects and hopefully compose original soundtracks for our games. I write whatever stories come to my mind and hopefully make them into games sometimes.`,
	},

	{
		avatar: 'https://avatars.githubusercontent.com/u/133224159?v=4',
		username: 'gnayiqnat',
		roles: ['Digital Marketer'],
		description: 'Hello! I am gnayiqnat.',
		icons: ['homepage', 'github'],
		links: ['https://gnayiqnat.github.io', 'https://github.com/gnayiqnat'],
	},
];

export default function OurTeam() {
	return (
		<Grid sx={{ marginTop: 3, padding: '0px clamp(5vw, 10vw, 10vw)' }}>
			<Container
				sx={{
					borderStyle: 'solid',
					borderColor: 'primary.color',
					borderWidth: 1,
					borderRadius: 5,
				}}
			>
				<Grid container sx={{ padding: '65px 0px', justifyContent: 'center' }}>
					<Grid item xs={10}>
						<Grid container rowGap={10}>
							{team.map((e, i) => (
								<Box key={i}>
									<Grid container sx={{ flexDirection: 'row' }}>
										<Grid item>
											<Grid
												container
												columnGap={2}
												sx={{ flexDirection: 'row', marginBottom: 1.3 }}
											>
												<Grid item>
													<Avatar
														sx={{
															width: 50,
															height: 50,
															border: '1.5px solid',
															borderColor: 'primary.color'
														}}
														src={e.avatar}
													/>
												</Grid>
												<Grid item sx={{ marginTop: 0.7 }}>
													<Typography variant='h5' fontWeight={600}>
														{e.username}
													</Typography>
												</Grid>
												<Box sx={{ marginTop: 0.72 }}>
													<Grid container columnGap={1} rowGap={1}>
														<RoleTags roles={e.roles} />
													</Grid>
												</Box>
											</Grid>

											<Box sx={{ paddingLeft: 1.5 }}>
												<Typography
													color='secondary.text2'
													variant='subtitle'
													fontWeight={400}
												>
													{e.description}
												</Typography>
											</Box>
											{e.icons && (
												<ProfileLinks icons={e.icons} links={e.links} />
											)}
										</Grid>
									</Grid>
								</Box>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
}
function ProfileLinks(props) {
	return (
		<Grid container sx={{ flexDirection: 'row' }}>
			{props.icons.map((e, i) => (
				<Box key={e + i}>
					<IconButton sx={{ marginTop: 1.5, width: 40, height: 40 }}>
						<Link to={props.links[i]} target='_blank'>
							{e === 'homepage' && (
								<HomeRoundedIcon sx={{ color: 'primary.color' }} />
							)}
							{e === 'github' && <GitHubIcon sx={{ color: 'primary.color' }} />}
						</Link>
					</IconButton>
				</Box>
			))}
		</Grid>
	);
}

function RoleTags(props) {
	const roles = props.roles;
	return (
		<>
			{roles.map((e, i) => (
				<Box
					key={i}
					sx={{
						marginLeft: 0,
						backgroundColor: 'transparent',

						padding: '2px 6px',
						height: 'fit-content',
						width: 'fit-content',
						borderRadius: 1.25,
						borderWidth: '1.5px',
						borderStyle: 'solid',
						borderColor: 'primary.color',
					}}
				>
					<Typography
						variant='subtitle2'
						fontWeight={400}
						key={e}
						color='primary.color'
					>
						{e}
					</Typography>
				</Box>
			))}
		</>
	);
}

/*
						<>
					<Grid
						item
						sx={{
							borderStyle: 'solid',
							borderColor: 'primary.color',
							borderWidth: 1,
							borderRadius: 5,
						}}
					>
						<Grid container sx={{ padding: 5 }}>
							<Grid item>
								<Grid
									container
									columnGap={2}
									sx={{ flexDirection: 'row', marginBottom: 1 }}
								>
									<Grid item>
										<Avatar src={e.avatar} />
									</Grid>
									<Grid item>
										<Typography variant='h5' fontWeight={600}>
											{e.username}
										</Typography>
									</Grid>
									<Box>
										<Grid container columnGap={1}>
											<RoleTags roles={e.roles} />
										</Grid>
									</Box>
								</Grid>

								<Typography color='secondary.text2'>{e.description}</Typography>
								<Box sx={{ marginTop: 1.5 }}>
									<GitHubIcon />
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</>
*/
