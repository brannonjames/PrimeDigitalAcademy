import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';

class UnderstandingView extends Component {

  handleSubmit = value => {
    console.log(value);
    this.props.history.push('/4');
  }

  render() {
    return (
      <Main>

        <ProgressBar 
          title="3 of 4 pages"
          percentage={75}
        />

        <FeedbackForm
          question="How well do you feel supported?"
          type="rating"
          buttonLabel="Next"
          leftLabel="I feel abandoned."
          rightLabel="I feel supported!"
          onSubmit={this.handleSubmit}
        />
      </Main>
    )
  }
}

export default connect()(UnderstandingView);