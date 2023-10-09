import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

/* Fonts */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Nav from './components/navigation';
import Homepage from './pages/homepage/homepage';
import Games from './pages/games/games';
import Credits from './pages/credits/credits';
import About from './pages/about/about';
import NotFound from './pages/404/404';
import logo from './assets/logo-large.png';
import NavTabs from './components/beta-navigation';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: { main: '#FFFFFF' },
		background: { default: '#000016' },
		text: {primary: '#ffffff'},
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
						<Route exact path='*' element={<NotFound />}></Route>
					</Routes>
				</Router>
			</ThemeProvider>
			<img style={{height:'110vh',position:'absolute',left:'60vw',top:'-5vh', zIndex:9999,opacity: 0.04, transform: 'rotate(5deg)', pointerEvents:'none'}} src={logo} />
		</>
	);
}

export default App;
