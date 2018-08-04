import React, { Component } from 'react';

import Main from '../components/Main/Main';
import Button from '../components/Button/Button';

class ThankYouView extends Component {


  render() {
    return (
      <Main>

        <h2>Thank You!</h2>

        <Button 
          label="Leave New Feedback"
          onClick={() => this.props.history.push('/')}
        />
        
      </Main>
    )
  }
}


export default ThankYouView;