import axios from 'axios';
import request from 'superagent';

export function login(data) {
  return dispatch => {
    return axios({
      method: 'post',
      url: 'https://i2x-challenge.herokuapp.com/core/login/',
      headers: {'Content-Type': 'application/json'},
      data
    }).then( res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      // setAuthorizationToken(token);
      // dispatch(setCurrentUser(jwt.decode(token)));
    })
  }
}