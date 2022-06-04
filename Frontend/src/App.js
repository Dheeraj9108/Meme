// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Postitem from './components/Postitem';



function App() {
  return (
    <>
     <Navbar title={"SWIrel"}/>
     <div className="container">
       <Postitem/>
     </div>
    </>
  );
}

export default App;
