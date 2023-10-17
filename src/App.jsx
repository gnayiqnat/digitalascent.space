import { useEffect, useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
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
			background: '#121212',
			text: '#ffffff',
		},
		secondary: {
			main: '#ffffff',
			text: '#757575',
		},
	},
});

export default function App() {
	const [themeMode, setThemeMode] = useState('light');
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			<ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
				<CssBaseline />
				<AnimatePresence>
					
						<Router>
							<NavTabs themeMode={themeMode} setThemeMode={setThemeMode} />
							<RoutesWithAnimation />
						</Router>
					
				</AnimatePresence>
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
		transition: {delay: 0.15}
	},
	
};
