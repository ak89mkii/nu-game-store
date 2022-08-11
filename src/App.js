import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Index/index.jsx'
import Error404 from './pages/Error404/error404.jsx'

class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="screen">
        <Router>
          {/* Use Switch to avoid 404 not rendering on all pages. */}
          <Routes>
            {/*All our Routes goes here!*/}
            <Route exact path="/" element={<Home/>} />
            <Route element={<Error404/>} />
          </Routes>
        </Router>
        {/* <Temp /> */}
      </div>
    );
  }
}

export default App;
