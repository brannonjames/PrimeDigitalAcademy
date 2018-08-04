import React, { Component } from 'react';
import './FeedbackForm.css';

import FeedbackInput from '../FeedbackInput/FeedbackInput';
import FeedbackButtonSection from '../FeedbackButtonSection/FeedbackButtonSection';
import Button from '../Button/Button';

class FeedbackForm extends Component {

  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.value);
  }

  render() {
    const { buttonLabel, children, leftLabel, rightLabel, text } = this.props;
    return (
      <div className="FeedbackForm">

        <FeedbackInput
          text={text}
          label={this.props.question}
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          handleChange={this.handleChange}
        />

        { children }

        <FeedbackButtonSection>
          <Button 
            label={buttonLabel}
            onClick={this.handleSubmit}
          />
        </FeedbackButtonSection>

      </div>
    );
  }
}

export default FeedbackForm;

