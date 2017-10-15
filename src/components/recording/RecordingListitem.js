import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RatingStars from '../shared/RatingStars';

export default class RecordingListItem extends Component {
  render() {
    return (
      <div className="panel panel-default recording-item">
        <div className="panel-body">
          <h2>Script</h2>
          <RatingStars rating={this.props.recording.rating} />    
          <p>Created: {this.props.recording.created} Duration: {this.props.recording.duration}</p>
          <p className="script-text">{this.props.recording.final_script}</p>
          <audio controls="controls">
          <source src={this.props.recording.url} type="audio/ogg" />
          </audio>
        </div>
      </div>
    )
  }
}

RecordingListItem.PropTypes = {
  recording: PropTypes.object.isRequired
}