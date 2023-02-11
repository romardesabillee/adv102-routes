import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import { Route, Routes, NavLink } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">
      <div>
        <NavLink to="/">Home</NavLink>
        <br/>
        <NavLink to="/about">About</NavLink>
      </div>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/fdsafdsafd" element={<About/>} />
      </Routes>
    </div>
  );
}
