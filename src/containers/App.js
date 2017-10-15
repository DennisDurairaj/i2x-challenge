import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/login/Login';
import RecordingList from '../components/recording/RecordingList';
import requireAuth from '../utils/authorization/requireAuth';
import jwt from 'jsonwebtoken';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <Route exact path='/' render={() => (
          localStorage.jwtToken ? (
            <Redirect to='/list' />
          ) : (
            <Login />
          )
        )}/>
        <Route path='/list' component={requireAuth(RecordingList)} />
      </div>
    );
  }
}
