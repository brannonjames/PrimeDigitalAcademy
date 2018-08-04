import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSupportedRating } from '../store/actions/feedback';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import FeedbackInput from '../components/FeedbackInput/FeedbackInput';
import FeedbackButtonSection from '../components/FeedbackButtonSection/FeedbackButtonSection';
import Button from '../components/Button/Button';

class UnderstandingView extends Component {

  state = { supported: 0 } 

  handleChange = e => {
    const supported = Number(e.target.value);
    this.setState({ supported });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history, dispatch } = this.props;

    dispatch(addSupportedRating(this.state.supported));
    history.push('/4');
  }

  render() {
    return (
      <Main>

        <ProgressBar 
          title="3 of 4 pages"
          percentage={75}
        />

        <FeedbackForm onSubmit={this.handleSubmit}>
          <FeedbackInput 
            label="how well do you feel supported?" 
            leftLabel="I feel abandoned."
            rightLabel="I feel supported"
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