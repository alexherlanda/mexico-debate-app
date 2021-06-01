import React from 'react';
import './App.css';
import { GeneralInfo, WIP, TestComponents, EducationalMaterials, Schedule } from './containers';
import { Tabs, Banner } from './components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Banner />
      <Router>
        <Tabs />
        <Switch>
          <Route exact path="/" component={GeneralInfo} />
          <Route exact path="/test" component={TestComponents} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/education" component={EducationalMaterials} />
          <Route exact path="/live" component={WIP} />
          <Route exact path="/my-tournament" component={WIP} />
          <Route exact path="*" component={GeneralInfo} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
