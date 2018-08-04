import React, { Component } from 'react';
import './FeedbackForm.css';

import FeedbackInput from '../FeedbackInput/FeedbackInput';
import FeedbackButtonSection from '../FeedbackButtonSection/FeedbackButtonSection';
import Button from '../Button/Button';

class FeedbackForm extends Component {

  

  render() {
    const { buttonLabel } = this.props;
    return (
      <div className="FeedbackForm">

        <FeedbackInput />

        <FeedbackButtonSection>
          <Button 
            label={buttonLabel}
          />
        </FeedbackButtonSection>

      </div>
    );
  }
}

export default FeedbackForm;

