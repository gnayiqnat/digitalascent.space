import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*  */
import Section1 from './pages/section1/section1';
import NotFound from './pages/404/404';

function App() {
  return (
    <div id='container'>
      <Router>
        <Routes> {/* The Routes decides which component to show based on the current URL.*/}
          <Route exact path='/' element={<Section1 />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;