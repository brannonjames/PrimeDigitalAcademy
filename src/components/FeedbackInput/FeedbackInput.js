import React, { Component } from 'react';
import './FeedbackInput.css';

class FeedbackInput extends Component {

  renderRadioLabels() {
    const { leftLabel, rightLabel, text } = this.props;
    if (!text) {
      return (
        <div className="radio-label-container">

          <div className="radio-label">
            <p>{leftLabel}</p>
          </div>

          <div className="radio-label">
            <p>{rightLabel}</p>
          </div>  

        </div>
      )
    }
  }

  renderInput() {
    const { onChange, text } = this.props;

    if (text) {
      return (
        <div>
          <textarea onChange={onChange}></textarea>
        </div>
      )
    } else {
      return (
        <div className="radio-section">
          <input type="radio" onChange={onChange} name="rating" value="1" id="1" />
          <input type="radio" onChange={onChange} name="rating" value="2" id="2" />
          <input type="radio" onChange={onChange} name="rating" value="3" id="3" />
          <input type="radio" onChange={onChange} name="rating" value="4" id="4" />
          <input type="radio" onChange={onChange} name="rating" value="5" id="5" />
        </div>
      )

    }
  }

  render() {
    return (
      <div className="FeedbackInput">
        <div className="content">

          <p>{this.props.label}</p>

          { this.renderRadioLabels() }

          <div className="input-container">
            { this.renderInput() }
          </div>

        </div>
      </div>
    )
  }
}

export default FeedbackInput;