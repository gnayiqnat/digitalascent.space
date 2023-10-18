import { useEffect, useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';

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
	redirect,
} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import Games from './pages/games/games';
import Credits from './pages/credits/credits';
import About from './pages/about/about';
import NotFound from './pages/404/404';
import NavTabs from './components/navigation';
import LoadingSplashScreen from './components/loading';

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
			background: { default: '#000016' },
			background: '#000016',
			text: '#ffffff',
		},
		secondary: {
			main: '#ffffff',
			text: '#757575',
		},
	},
});

export default function App() {
	const [fontHasLoaded, setFontHasLoaded] = useState(false);
	const [themeMode, setThemeMode] = useState('light');

	const scaleDown = useAnimationControls();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	useEffect(() => {
		if (isDrawerOpen) {
			scaleDown.start({
				scale: 0.85,
				transition: { delay: 0.05 },
			});
		} else if (!isDrawerOpen) {
			scaleDown.start({ scale: 1, transition: { delay: 0.05 } });
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
