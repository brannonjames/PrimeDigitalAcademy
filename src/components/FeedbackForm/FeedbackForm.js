import React, { Component } from 'react';
import './FeedbackForm.css';

class FeedbackForm extends Component {

render() {
    const { children, onSubmit } = this.props;
    return (
      <form 
        className="FeedbackForm"
        onSubmit={onSubmit}
      >
        { children }
      </form>
    );
  }
}

export default FeedbackForm;

