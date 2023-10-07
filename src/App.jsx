import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Pages  */
import NotFound from './pages/404/404';

import Homepage from './pages/homepage/homepage';
import Games from './pages/games/games'
import Credits from './pages/credits/credits'
import About from './pages/about/about'
import { useEffect, useState } from 'react';
import Nav from './components/navigation/navigation';



function App() {

  return (
    <>
    
    <div id='container'>
      <Router><Nav />
        <Routes> {/* The Routes decides which component to show based on the current URL.*/}
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/games' element={<Games />}></Route>
          <Route exact path='/credits' element={<Credits />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div></>
  );
}


export default App;