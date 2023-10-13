import { useState } from 'react';

/* Fonts */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import Games from './pages/games/games';
import Credits from './pages/credits/credits';
import About from './pages/about/about';
import NotFound from './pages/404/404';
import logo from './assets/logo-large.png';
import NavTabs from './components/beta-navigation';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Signup from './pages/sign-up/signup';
import Login from './pages/log-in/login';
import DatabaseConnectionCheck from './pages/dbcheck/dbcheck';


const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#FFFFFF' },
		background: { default: '#000016' },
		text: { primary: '#ffffff' },
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<NavTabs />
					<Routes>
						<Route exact path='/' element={<Homepage />}></Route>
						<Route exact path='/games' element={<Games />}></Route>
						<Route exact path='/credits' element={<Credits />}></Route>
						<Route exact path='/about' element={<About />}></Route>
						<Route exact path='/signup' element={<Signup />}></Route>
						<Route exact path='/login' element={<Login />}></Route>
						<Route
							exact
							path='/dbcheck'
							element={<DatabaseConnectionCheck />}></Route>
						<Route exact path='*' element={<NotFound />}></Route>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
