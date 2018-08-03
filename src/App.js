import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import CommentView from './views/CommentView';
import FeelingView from './views/FeelingView';
import SupportedView from './views/SupportedView';
import UnderstandingView from './views/UnderstandingView';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FeelingView} />
          <Route path="/2" component={UnderstandingView} />
          <Route path="/3" component={SupportedView} />
          <Route path="/4" component={CommentView} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
