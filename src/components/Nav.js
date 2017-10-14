import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../actions/loginActions';

class Nav extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.authorize;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand" href="#">i2x</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            { isAuthenticated ? (
              <ul className="nav navbar-nav navbar-right">
              <li>
                <a onClick={this.props.logout} href="#">Logout</a>
              </li>
            </ul>
            ) : '' }

          </div>
        </div>
      </nav>
    )
  }
}

Nav.PropTypes = {
  authorize: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {authorize: state.authorize};
}

export default connect(mapStateToProps, { logout })(Nav);