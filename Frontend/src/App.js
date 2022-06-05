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
import Poststate from './context/post/Poststate';
import ProfileState from './context/profile/ProfileState';


function App() {
  return (
    <>
      <Poststate>
        <ProfileState>
          <Router>
            <Navbar title={"SWIrel"} />
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Postitem />}></Route>
                <Route exact path='/Profile' element={<Profile />}></Route>
              </Routes>
            </div>
          </Router>
        </ProfileState>
      </Poststate>
    </>
  );
}

export default App;
