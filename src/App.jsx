import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../components/global/Navigation';
import Description from '../components/Description';
import MainConltent from '../components/MainContent';
import Homepage from '../components/Homepage';
import About from '../components/AboutUs';
import Categories from '../components/Categories';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/HomePage" exact component={Homepage} />
          <Route path="/AboutUs" exact component={About} />
          <Route path="/Categories" exact component={Categories} />
        </Routes>
      </div>
        <>
          <Homepage />
        </>
    </Router>
  );
}

export default App;
