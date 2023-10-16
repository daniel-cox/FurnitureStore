import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from '../components/global/Navigation';
import Homepage from '../components/Homepage';
import './App.css';
import MainContent from '../components/MainContent'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        <Route exact path='/StoneHouse-Leather-Couch' element={<MainContent/>}/>
        </Routes>
      </div>
        <>
          <Homepage />
        </>
    </Router>
  );
}

export default App;
