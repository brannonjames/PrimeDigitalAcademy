import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeedbackWrapper from '../components/FeedbackWrapper/FeedbackWrapper';
import FeedbackFormInput from '../components/FeedbackFormInput/FeedbackFormInput';

class FeelingView extends Component {
  render() {
    return (
      <FeedbackWrapper>
        <FeedbackFormInput 
          question="How are you feeling today?"
          type="rating"
        />
      </FeedbackWrapper>
    )
  }
}

export default connect()(FeelingView);