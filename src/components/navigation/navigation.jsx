import { Box, AppBar, Toolbar, Card } from '@mui/material';
import MobileNavigation from './navigation-mobile';
import { useMediaQuery } from 'react-responsive';
import NotificationIcon from '../notificationIcon';
/* Local Imports */
import ThemeSwitcher from '../theme-switcher';
import NavDesktop from './navigation-desktop';
import Logo from '../logo';

export default function NavTabs(props) {
	const isMobile = useMediaQuery({ query: '(max-width: 950px)' });

	return (
		<AppBar
			sx={{
				backgroundColor: 'transparent',
				position: 'relative',
				borderRadius: 7,
			}}
			elevation={0}
		>
			
			<Toolbar
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					height: '60px',
					paddingLeft: 3,
				}}
			>
				<Logo themeMode={props.themeMode} />
				{!isMobile && <NavDesktop />}
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					{!isMobile /* If is on desktop */ && (
						<>
							<NotificationIcon themeMode={props.themeMode} />
						</>
					)}
					<ThemeSwitcher
						themeMode={props.themeMode}
						setThemeMode={props.setThemeMode}
					/>
					{isMobile /* If is on mobile */ && (
						<MobileNavigation
							scaleDown={props.scaleDown}
							themeMode={props.themeMode}
							setThemeMode={props.setThemeMode}
						/>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
}
