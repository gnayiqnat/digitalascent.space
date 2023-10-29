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
import Homepage from './src/pages/homepage/homepage';
import Games from './src/pages/games/games';
import Credits from './src/pages/credits/credits';
import About from './src/pages/about/about';
import Notifications from './src/pages/notifications/notifications';
import Login from './src/pages/login/login';
import SignUp from './src/pages/signup/signup';
import NavTabs from './src/components/navigation/navigation';

/* Color theme */
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#000000',
			
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
			background: { default: '#000016' },
			text: '#ffffff',
		},
		secondary: {
			
			main: '#ffffff',
			text: '#757575',
			text2: '#dcdcdc',
		},
	},
});

/* App */
export default function App() {
	const [themeMode, setThemeMode] = useState('dark');
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	const scaleDown = useAnimationControls();

	useEffect(() => {
		if (isDrawerOpen && isMobile) {
			scaleDown.start({
				scale: 0.85,
				transition: { delay: 0.05 },
			});
		} else if (!isDrawerOpen) {
			scaleDown.start({ scale: 1, transition: { delay: 0.05 } });
		} else {
			setIsDrawerOpen(false);
			scaleDown.start({ scale: 1 });
		}
	});

	return (
		<>
			<ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
				<CssBaseline />
				<Router>
					<motion.div animate={scaleDown}>
						<NavTabs
							isDrawerOpen={isDrawerOpen}
							setIsDrawerOpen={setIsDrawerOpen}
							themeMode={themeMode}
							setThemeMode={setThemeMode}
						/>
						<RoutesWithAnimation animate={scaleDown} />
					</motion.div>
				</Router>
			</ThemeProvider>
		</>
	);
}

function RoutesWithAnimation() {
	const location = useLocation();

	return (
		<Routes location={location} key={location.key}>
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
				path='/notifications'
				element={<Notifications routeVariants={routeVariants} />}
			/>
			<Route
				exact
				path='/login'
				element={<Login routeVariants={routeVariants} />}
			/>
			<Route
				exact
				path='/signup'
				element={<SignUp routeVariants={routeVariants} />}
			/>
		</Routes>
	);
}

const routeVariants = {
	initial: {
		y: '5vh',
		opacity: 0,
	},
	final: {
		y: '0vh',
		opacity: 1,
		transition: { delay: 0.15 },
	},
};
