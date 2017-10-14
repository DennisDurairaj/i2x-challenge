import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Route } from 'react-router-dom';
import Login from '../components/login/Login';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Route exact path='/' component={Login} />
        {/* <Route path='/login' component={Login} /> */}
      </div>
    );
  }
}
