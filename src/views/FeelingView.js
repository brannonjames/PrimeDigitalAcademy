import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFeelingRating } from '../store/actions/feedback';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import FeedbackInput from '../components/FeedbackInput/FeedbackInput';
import FeedbackButtonSection from '../components/FeedbackButtonSection/FeedbackButtonSection';
import Button from '../components/Button/Button';

class FeelingView extends Component {

  state = { feeling: 0 } 

  handleChange = e => {
    const feeling = Number(e.target.value);
    this.setState({ feeling });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history, dispatch } = this.props;

    dispatch(addFeelingRating(this.state.feeling));
    history.push('/2');
  }

  render() {
    return (
      <Main>

        <ProgressBar 
          title="1 of 4 pages"
          percentage={25}
        />

        <FeedbackForm onSubmit={this.handleSubmit}>

          <FeedbackInput 
            label="How are you feeling today?" 
            leftLabel="I'm very stressed"
            rightLabel="I'm feeling great!"
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

export default connect()(FeelingView);