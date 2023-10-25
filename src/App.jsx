import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from '../components/global/Navigation';
import Homepage from '../components/Homepage';
import './App.css';
import MainContent from '../components/MainContent'
import About from '../components/AboutUs';

function scrollBehavior() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
}

function App() {
  return (
    <Router onUpdate={scrollBehavior}>
      <div>
        <Navigation />  {/* renders site navigation */}
        <Routes scrollRestoration="auto">
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/StoneHouse-Leather-Couch' element={<MainContent/>}/>
          <Route exact path='About-Us' element={<About />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
