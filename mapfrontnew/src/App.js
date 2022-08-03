

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Signin } from './Components/LoginSIgnup/Login';
import { Signup } from './Components/LoginSIgnup/Register';
import { AviMap } from './Components/Map/AviMap';
import { Navbar } from './Components/Navbar/Navbar';
// import "../register.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
    
    <h1>Your Map Application</h1>
    
  
    <Routes>
      <Route path="/" element={<Home />} />
    <Route path="Signup" element={<Signup />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="AviMap" element={<AviMap />} />
    
    </Routes>
    </div>
  );
}

export default App;
