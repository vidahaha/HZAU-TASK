import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './component/Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
