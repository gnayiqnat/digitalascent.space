import { AppBar, Box, Card, Toolbar } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/* Local Imports */
import Logo from '../logo';
import MobileNavigation from './navigation-mobile';
import ThemeSwitcher from '../theme-switcher';
import NavDesktop from './navigation-desktop';

export default function NavTabs(props) {
	const isMobile = useMediaQuery({ query: '(max-width: 950px)' });

	return (
		<AppBar
			sx={{
				backgroundColor: 'transparent',
				position: 'relative',
				borderRadius: 7,
				padding: '15px',
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
