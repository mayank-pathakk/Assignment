import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Completed from 'src/components/Monitoring/Completed';
import Pending from 'src/components/Monitoring/Pending';
import Home from 'src/components/Home';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/monitoring/pending' Component={Pending} />
        <Route path='/monitoring/completed' Component={Completed} />
      </Routes>
    </Router>
  );
}

export default App;
