import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';

class UnderstandingView extends Component {

  handleSubmit = value => {
    console.log(value);
  }

  render() {
    return (
      <Main>

        <ProgressBar 
          title="4 of 4 pages"
          percentage={100}
        />

        <FeedbackForm
          text
          question="Any comments you want to leave?"
          buttonLabel="Submit"
          onSubmit={this.handleSubmit}
        />
      </Main>
    )
  }
}

export default connect()(UnderstandingView);