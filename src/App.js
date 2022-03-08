import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Sat from './pages/Sat';
import Sun from './pages/Sun';

//router dom
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
  <>

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<NavBar /> }>
        <Route path="/" element={ <Navigate to ="/home"/>} />
        <Route path="/home" element={ <Home />} />
        <Route path="/sat" element={ <Sat />} />
        <Route path="/sun" element={ <Sun />} />
        </Route>
      </Routes>
    </BrowserRouter>


  </>
  );
}

export default App;
