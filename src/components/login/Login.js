import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions'

class Login extends Component {
  render() {
    return (
      <div>
        <div className="col-md-4 col-md-offset-4">
          <LoginForm login={this.props.login}/>
        </div>
      </div>
    )
  }
}

export default connect(null, { login })(Login);