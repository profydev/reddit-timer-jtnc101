import React from 'react';
import './normalize.css';
import './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Search';
import Main from './Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
