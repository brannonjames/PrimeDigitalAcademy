import React, { Component } from 'react';
import './FeedbackInput.css';

class FeedbackInput extends Component {

  renderInput() {

    const { handleChange } = this.props;

    if (this.props.text) {

      return (
        <div>
          <textarea onChange={handleChange}></textarea>
        </div>
      )
    } else {

      return (
        <div>
          <label htmlFor="1">1</label>
          <input type="radio" onChange={handleChange} name="rating" value="1" id="1" />

          <label htmlFor="2">2</label>
          <input type="radio" onChange={handleChange} name="rating" value="2" id="2" />

          <label htmlFor="3">3</label>
          <input type="radio" onChange={handleChange} name="rating" value="3" id="3" />

          <label htmlFor="4">4</label>
          <input type="radio" onChange={handleChange} name="rating" value="4" id="4" />

          <label htmlFor="5">5</label>
          <input type="radio" onChange={handleChange} name="rating" value="5" id="5" />
        </div>
      )

    }
  }

  render() {
    return (
      <div className="FeedbackInput">
        <div className="content">
          <p>{this.props.label}</p>
          { this.renderInput() }
        </div>
      </div>
    )
  }
}

export default FeedbackInput;