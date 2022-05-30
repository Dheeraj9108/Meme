// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Shop from './components/Shop';



function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Shop />
      </div>
    </>
  );
}

export default App;
