import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecordingList } from '../../actions/fetchListActions';
import RecordingListItem from './RecordingListItem';
import moment from 'moment';

class RecordingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordings: []
    }
  }
  componentDidMount() {
    this.props.fetchRecordingList().then(
      (res) => {
        // console.log(res);
        this.setState({ recordings: res.results });
      },
      (err) => {
        console.log(err);
      }
    ) ;
  }

  getDurationInMinutes(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  }

  transformRecordingData(recording) {
    recording.created = moment(recording.created, "YYYY-MM-DD HH:mm:ss Z" ).format('D MMMM YYYY');
    recording.duration = this.getDurationInMinutes(recording.duration);
  }

  render() {
    const recordings = this.state.recordings;
    return (
      
      <div>
        {recordings.map((recording, index) => {
          this.transformRecordingData(recording);
          return <RecordingListItem recording={recording} key={index} />
        })}
      </div>
    )
  }
}

export default connect(null, { fetchRecordingList })(RecordingList);