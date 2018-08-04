import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';

class FeelingView extends Component {
  render() {
    return (
      <Main>

        <ProgressBar 
          title="1 of 4 pages"
          percentage={25}
        />

        <FeedbackForm
          question="How are you feeling today?"
          type="rating"
          buttonLabel="Next"
          leftLabel="I'm very stressed"
          rightLabel="I'm feeling great!"
          onSubmit={val => console.log(val)}
        />
      </Main>
    )
  }
}

export default connect()(FeelingView);