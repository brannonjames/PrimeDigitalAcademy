import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addAllFeedback } from '../store/actions/admin';

import Main from '../components/Main/Main';

class AdminView extends Component {

  componentDidMount() {
    axios.get('/api/feedback')
      .then(response => {
        this.props.dispatch(addAllFeedback(response.data));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Main>
        <h1>Hellooo</h1>
      </Main>
    );
  }
}

const mapStateToProps = ({ admin }) => ({
  feedback: admin.feedback
});

export default connect(mapStateToProps)(AdminView);