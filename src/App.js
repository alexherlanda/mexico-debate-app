import React from 'react';
import './App.css';
import {
  GeneralInfo,
  Live,
  WIP,
  TestComponents,
  EducationalMaterials,
  Schedule,
  MySite
} from './containers';
import { Tabs, Banner } from './components';
import { useHistory, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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
          <Route exact path="/live" component={Live} />
          <Route exact path="/my-tournament" component={MySite} />
          <Route exact path="*" component={GeneralInfo} />
        </Switch>
        <ToastContainer  />
      </Router>
    </>
  );
}
export default App;
