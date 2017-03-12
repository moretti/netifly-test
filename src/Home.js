import React from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './Home.css';

export default function Home () {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Home</h2>
      </div>
      <p className="App-intro">
        <Link to="/about">About</Link>
      </p>
    </div>
  );
}
