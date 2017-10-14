import axios from 'axios';

export function fetchRecordingList() {
  return dispatch => {
    return axios.get('https://i2x-challenge.herokuapp.com/ai/recording/list/').then( res => {
      debugger;
    })
  }
}