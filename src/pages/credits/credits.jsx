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
import { MotionConfig, motion } from 'framer-motion';

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
		roles: 'Game tester',
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
	return (
		<>
			<motion.div
				variants={props.routeVariants}
				initial='initial'
				animate='final'
			>
				<section>
					<Grid
						container
						sx={{
							flexDirection: 'row',
							justifyContent: 'center',
							gap: 10,
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
										initial={{ opacity: 1 }}
										whileHover={{ opacity: e.links ? 0.5 : 1 }}
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											padding: '0px 10px',
										}}
									>
										<Avatar
											src={e.avatar}
											sx={{
												width: 100,
												height: 100,
												marginBottom: 2,
											}}
										/>
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
