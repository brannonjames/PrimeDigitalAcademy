import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUnderstandingRating } from '../store/actions/feedback';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';

class UnderstandingView extends Component {

  handleSubmit = value => {
    const { history, addUnderstandingRating } = this.props;

    addUnderstandingRating(value);
    history.push('/3');
  }

  render() {
    return (
      <Main>

        <ProgressBar 
          title="2 of 4 pages"
          percentage={50}
        />

        <FeedbackForm
          question="How well are you understanding the content?"
          type="rating"
          buttonLabel="Next"
          leftLabel="I'm totally lost."
          rightLabel="I've got this!"
          onSubmit={this.handleSubmit}
        />
      </Main>
    )
  }
}

export default connect(null, {addUnderstandingRating})(UnderstandingView);