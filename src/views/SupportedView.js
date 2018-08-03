import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportedView extends Component {
  render() {
    return (
      <div>Supported View</div>
    )
  }
}

export default connect()(SupportedView);