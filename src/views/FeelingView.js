import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingView extends Component {
  render() {
    return (
      <div>Feeling View</div>
    )
  }
}

export default connect()(FeelingView);