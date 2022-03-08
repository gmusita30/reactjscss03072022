import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Sat from './pages/Sat';
import Sun from './pages/Sun';

//router dom
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ 
        <>
        <NavBar />
        </>
        }>
        {<Route path="/home" element={ <Home />} />}
        {<Route path="/sat" element={ <Sat />} />}
        {<Route path="/sun" element={ <Sun />} />}
        </Route>
      </Routes>
    </BrowserRouter>


  </>
  );
}

export default App;
