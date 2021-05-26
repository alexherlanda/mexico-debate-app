import React from 'react';
import './App.css';
import { GeneralInfo, WIP, TestComponents } from './containers';
import { Tabs } from './components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Tabs />
      <Switch>
        <Route exact path="/" component={GeneralInfo} />
        <Route exact path="/test" component={TestComponents} />
        <Route exact path="/schedule" component={WIP} />
        <Route exact path="/education" component={WIP} />
        <Route exact path="/live" component={WIP} />
        <Route exact path="/my-tournament" component={WIP} />
      </Switch>
    </Router>
  );
}
export default App;
