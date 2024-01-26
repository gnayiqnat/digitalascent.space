import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeSwitcher(props) {
	return (
		<div
			onClick={() => {
				props.setThemeMode(props.themeMode === 'light' ? 'dark' : 'light');
				document.cookie = `themeMode=${
					props.themeMode === 'light' ? 'dark' : 'light'
				}; SameSite=Strict; Secure`;
			}}
		>
			<IconButton>
				{props.themeMode === 'light' ? (
					<LightModeIcon color='primary' />
				) : (
					<DarkModeIcon color='primary' />
				)}
			</IconButton>
		</div>
	);
}
