import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputFieldGroup from '../shared/InputFieldGroup';
import validateLogin from '../../utils/validations/login/validateLogin';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "email": '',
      "password": '',
      "errors": {}
    }
  }
  validationsCheck() {
    const {errors, isValid} = validateLogin(this.state);

    if (!isValid) {
      this.setState({errors})
    }
    return isValid;
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.validationsCheck()) {
      this.setState({errors: {}});
      const { errors, ...data } = this.state;
      this.props.login(JSON.stringify(data)).then(
        (res) => this.context.router.history.push('/list'),
        (err) => {
          debugger;
          this.setState({errors: err.response.data})
        }
      )
    }
  }

  render() {
    const {errors, email, password} = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          {errors.non_field_errors && <div className="alert alert-danger">{errors.non_field_errors}</div>}
          <InputFieldGroup
            label="Email"
            value={email}
            name="email"
            error={errors.email}
            type="text"
            onChange={this.onChange}/>
          <InputFieldGroup
            label="Password"
            value={password}
            name="password"
            error={errors.password}
            type="password"
            onChange={this.onChange}/>

          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

LoginForm.PropTypes = {
  login: PropTypes.func.isRequired
}