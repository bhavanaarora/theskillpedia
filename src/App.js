import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Router>
     <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    {/* <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Logout' element={<Logout/>}/>
    <Route exact path='/Signup' element={<Signup/>}/> */}
      </Routes>
      <Footer/>
</Router>
    </>
  )
}

export default App