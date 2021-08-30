import React from 'react';
import './normalize.css';
import './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Search';
import Main from './Main';
import Terms from './Terms';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search?value=:query" component={Search} />
        <Route path="/" exact component={Main} />
        <Route path="/terms" component={Terms} />
      </Switch>
    </Router>
  );
}

export default App;
