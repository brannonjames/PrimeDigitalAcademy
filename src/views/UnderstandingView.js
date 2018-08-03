import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  render() {
    return (
      <div>Understanding View</div>
    )
  }
}

export default connect()(Understanding);