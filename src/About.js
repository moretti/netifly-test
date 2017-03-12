import React from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';

export default function About() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>About</h2>
      </div>
      <p className="App-intro">
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
