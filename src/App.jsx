import React from 'react';
import './App.css';
import Backend from './components/Backend';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Frontend from './components/Frontend';
function App() {
  return (
    <Router>
     
     <ul style={{ display: "flex" }}>
          <li>
            <Link to="/">viewdetails</Link>
          </li>
          <li>
            <Link to="/Frontend">hidedetails</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Backend/>}/>
          <Route path='/Frontend' element={<Frontend/>}/>
        </Routes>
      
    </Router>
  )
}

export default App;
