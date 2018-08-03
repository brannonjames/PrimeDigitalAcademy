import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingView extends Component {
  render() {
    return (
      <div></div>
      // <Feedback>
      //   <FeedbackFormInput
      //     title="How are you feeling today?"
      //     type="rating"
      //   />
      // </Feedback>
    )
  }
}

export default connect()(FeelingView);