// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
// import Postitem from './components/Postitem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import Poststate from './context/post/Poststate';
import ProfileState from './context/profile/ProfileState';
import Home from './components/Home';
// import Temp from './components/Temp';
import Commentstate from './context/comment/Commentstate';


function App() {
  return (
    <>
      <Poststate>
        <ProfileState>
          <Commentstate>
            <Router>
              <Navbar title={"SWIrel"} />
              <div className="container">
                <Routes>
                  <Route exact path='/' element={<Home />}></Route>
                  <Route exact path='/Profile' element={<Profile />}></Route>
                </Routes>
              </div>
            </Router>
          </Commentstate>
        </ProfileState>
      </Poststate>
      {/* <div className='container'>
        <Temp />
      </div> */}
    </>
  );
}

export default App;
