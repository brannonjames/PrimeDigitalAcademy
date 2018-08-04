import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import CommentView from './views/CommentView';
import FeelingView from './views/FeelingView';
import SupportedView from './views/SupportedView';
import UnderstandingView from './views/UnderstandingView';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <Header />

          <main>
            <Switch>
              <Route exact path="/" component={FeelingView} />
              <Route path="/2" component={UnderstandingView} />
              <Route path="/3" component={SupportedView} />
              <Route path="/4" component={CommentView} />
              <Redirect to="/" />
            </Switch>
          </main>
        
        </div>
      </Router>
    );
  }
}

export default App;
