import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecordingList } from '../../actions/fetchListActions';

class RecordingList extends Component {
  componentDidMount() {
    this.props.fetchRecordingList();
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    )
  }
}

export default connect(null, { fetchRecordingList })(RecordingList);