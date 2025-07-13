import React from 'react';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Home1 from './pages/Home1';
import Login from'./pages/Login';
import Register from'./pages/Register';
import'./App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home1 />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      </Routes>
      </Router>
  );
}

export default App;
