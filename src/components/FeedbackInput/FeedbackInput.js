import React, { Component } from 'react';
import './FeedbackInput.css';

class FeedbackInput extends Component {

  renderInput() {

    const { onChange } = this.props;

    if (this.props.text) {

      return (
        <div>
          <textarea onChange={onChange}></textarea>
        </div>
      )
    } else {
      return (
        <div className="radio-section">
          <div>
            <label htmlFor="1">1</label>
            <input type="radio" onChange={onChange} name="rating" value="1" id="1" />
          </div>

          <div>
            <label htmlFor="2">2</label>
            <input type="radio" onChange={onChange} name="rating" value="2" id="2" />
          </div>

          <div>
            <label htmlFor="3">3</label>
            <input type="radio" onChange={onChange} name="rating" value="3" id="3" />
          </div>

          <div>
            <label htmlFor="4">4</label>
            <input type="radio" onChange={onChange} name="rating" value="4" id="4" />
          </div>

          <div>
            <label htmlFor="5">5</label>
            <input type="radio" onChange={onChange} name="rating" value="5" id="5" />
          </div> 
        </div>
      )

    }
  }

  render() {
    return (
      <div className="FeedbackInput">
        <div className="content">
          <p>{this.props.label}</p>
          <div className="radio-labels">
            <p>{this.props.leftLabel}</p>
            <p>{this.props.rightLabel}</p>
          </div>
          { this.renderInput() }
        </div>
      </div>
    )
  }
}

export default FeedbackInput;