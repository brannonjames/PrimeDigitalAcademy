import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentView extends Component {
  render() {
    return (
      <div>Comment View</div>
    )
  }
}

export default connect()(CommentView);