import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom"


import './index.css';
import App from './App';
import Register from './Register';
import About from './About';
import Login from './Login';
import Home from './Home';
import Contact from './Contact';
import Search from './Search';

const routing = (
  <Router>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/register" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/about" Component={About} />
      <Route path="/home" Component={Home} />
      <Route path="/contact" Component={Contact} />
      <Route path="/search" Component={Search} />
    </Routes>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))