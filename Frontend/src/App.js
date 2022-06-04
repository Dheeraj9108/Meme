// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Postitem from './components/Postitem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <Navbar title={"SWIrel"} />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Postitem />}></Route>
            <Route exact path='/Profile' element={<Profile/>}></Route>
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
