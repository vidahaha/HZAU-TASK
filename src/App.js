import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './component/Login/Login'
import Index from './component/Index/Index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/index" component={Index} />
      </div>
    );
  }
}

export default App;
