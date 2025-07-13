import React from 'react';
import { Link } from 'react-router-dom';
import'./Home1.css';

function Home1() {
  return (
    <div className="nav">
    <div className="nav-bar">
      <Link className="nav-link" to="/login">Login</Link>
      <Link className="nav-link" to="/register">Register</Link>
    </div>
    </div>
  );
}

export default Home1;
