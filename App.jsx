import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

/* Fonts */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from 'react-router-dom';

/* Pages */
import Homepage from './src/pages/homepage';
import Games from './src/pages/games';
import Credits from './src/pages/credits';
import About from './src/pages/about';
import NavTabs from './src/components/navigation/navigation';
import NotFound from './src/pages/404';
import ComingSoon from './src/pages/comingSoon';

/* Color theme */
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#000000',
			color: '#00c6ac',
			text: '#000000',
			background: '#ffffff',
		},
		secondary: {
			main: '#757575',
			text: '#757575',
		},
	},
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ffffff',
			color: '#00c6ac',
			text: '#ffffff',
		},
		secondary: {
			main: '#757575',
			text: '#757575',
			text2: '#dcdcdc',
		},
		background: {
			default: '#1b1a20',
			paper: '#1b1a20',
		},
	},
});
// #1b1a20

/* App */
export default function App() {
	const [themeMode, setThemeMode] = useState('dark');

	useEffect(() => {
		// themeMode will be null on every refresh

		// Check if refresh has done, and if user has entered site before
		if (document.cookie.includes('themeMode')) {
			// If so, change the current theme mode to the previous one saved in the cookie
			if (document.cookie.includes('light')) {
				setThemeMode('light');
			}
		}
		// confusing code, idc anymore as long as it works
	}, []);

	return (
		<>
			<ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
				<CssBaseline />
				<Router>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 1 }}
					>
						<NavTabs themeMode={themeMode} setThemeMode={setThemeMode} />
						<RoutesWithAnimation />
					</motion.div>
				</Router>
			</ThemeProvider>
		</>
	);
}

function RoutesWithAnimation() {
	return (
		<Routes>
			<Route
				exact
				path='/'
				element={<Homepage routeVariants={routeVariants} />}
			/>
			<Route
				exact
				path='/games'
				element={<Games routeVariants={routeVariants} />}
			/>
			<Route
				exact
				path='/credits'
				element={<Credits routeVariants={routeVariants} />}
			/>
			<Route
				exact
				path='/about'
				element={<About routeVariants={routeVariants} />}
			/>
			<Route
				exact
				path='/games/down-to-earth'
				element={<ComingSoon routeVariants={routeVariants} />}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

const routeVariants = {
	initial: {
		opacity: 0,
	},
	final: {
		opacity: 1,
		transition: { delay: 0.3, duration: 0.5 },
	},
};
