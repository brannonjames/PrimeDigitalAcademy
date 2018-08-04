import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUnderstandingRating } from '../store/actions/feedback';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import FeedbackInput from '../components/FeedbackInput/FeedbackInput';
import FeedbackButtonSection from '../components/FeedbackButtonSection/FeedbackButtonSection';
import Button from '../components/Button/Button';

class UnderstandingView extends Component {

  state = { understanding: 0 } 

  handleChange = e => {
    const understanding = Number(e.target.value);
    this.setState({ understanding });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history, dispatch } = this.props;

    dispatch(addUnderstandingRating(this.state.understanding));
    history.push('/3');
  }

  render() {
    return (
      <Main>

        <ProgressBar 
          title="2 of 4 pages"
          percentage={50}
        />

        <FeedbackForm onSubmit={this.handleSubmit}>
          <FeedbackInput 
            label="How well are you understanding the content?" 
            leftLabel="I'm totally lost."
            rightLabel="I've got this!"
            onChange={this.handleChange}
          />

          <FeedbackButtonSection>
            <Button>Next</Button>
          </FeedbackButtonSection>
        </FeedbackForm>

      </Main>
    )
  }
}

export default connect()(UnderstandingView);