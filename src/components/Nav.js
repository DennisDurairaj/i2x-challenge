import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand" href="#">i2x</Link>
          </div>          
        </div>
      </nav>
    )
  }
}

export default Nav;