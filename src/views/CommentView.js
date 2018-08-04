import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addComment } from '../store/actions/feedback';

import Main from '../components/Main/Main';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import ProgressBar from '../components/ProgressBar/ProgressBar';

class UnderstandingView extends Component {

  handleSubmit = value => {
    const { history, dispatch, feedback } = this.props;


    dispatch(addComment(value));

    axios.post('/api/feedback', feedback)
      .then(() => history.push('/'))
      .catch(err => console.log(err));
  
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

const mapStateToProps = ({ feedback }) => ({
  feedback
});

export default connect(mapStateToProps)(UnderstandingView);