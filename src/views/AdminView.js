import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addAllFeedback } from '../store/actions/admin';

import Main from '../components/Main/Main';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';

const TABLE_HEADS = ['Feeling', 'Comprehension', 'Support', 'Comments', 'Delete'];

class AdminView extends Component {

  componentDidMount() {
    axios.get('/api/feedback')
      .then(response => {
        this.props.dispatch(addAllFeedback(response.data));
      })
      .catch(err => console.log(err));
  }

  // mapping each feedback object to give me exactly what I want to display on the table
  // 
  mapTableRows() {
    return this.props.feedback.map(row => ({ 
        feeling: row.feeling, 
        understanding: row.understanding, 
        support: row.support,
        comments: row.comments,
        delete: <Button style={{ backgroundColor: '#ff6666' }}>Delete</Button>
      })
    );
  }


  // Table will take in an array of strings to use as headers and
  // and array of objects whose values will be used to render table cells
  render() {
    return (
      <Main>

        <Table
          headers={TABLE_HEADS}
          rows={this.mapTableRows()}
        />
      
      </Main>
    );
  }
}

const mapStateToProps = ({ admin }) => ({
  feedback: admin.feedback
});

export default connect(mapStateToProps)(AdminView);