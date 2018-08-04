import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addComment, resetFeedback } from '../store/actions/feedback';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import FeedbackInput from '../components/FeedbackInput/FeedbackInput';
import FeedbackButtonSection from '../components/FeedbackButtonSection/FeedbackButtonSection';
import Button from '../components/Button/Button';
import { resolve } from 'url';

class CommentView extends Component {

  state = { comment: '' } 

  handleChange = e => {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history, dispatch, feedback } = this.props;
    const { comment } = this.state;

    dispatch(addComment(comment));

    axios.post('/api/feedback', {...feedback, comments: comment})
      .then(() => {
        dispatch(resetFeedback());
        history.push('/thank-you');
      })
      .catch(err => {
        console.log(err);
      });

  }


  render() {
    return (
      <Main>

        <ProgressBar 
          title="4 of 4 pages"
          percentage={100}
        />

        <FeedbackForm onSubmit={this.handleSubmit}>
          <FeedbackInput 
            text
            label="Any comments you want to leave?"
            onChange={this.handleChange}
          />

          <FeedbackButtonSection>
            <Button>Submit</Button>
          </FeedbackButtonSection>

        </FeedbackForm>

      </Main>
    )
  }
}

const mapStateToProps = ({ feedback }) => ({
  feedback
});

export default connect(mapStateToProps)(CommentView);