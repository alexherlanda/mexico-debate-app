import React from 'react';
import './App.css';
import {
  GeneralInfo,
  Live,
  TestComponents,
  EducationalMaterials,
  Schedule,
  MySite,
} from './containers';
import { Tabs, Banner } from './components';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import debateStore from './redux/store';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import 'assets/css/main.css';

function App() {
  return (
    <>
      <Provider store={debateStore}>
        <Router>
          <Banner />
          <Tabs />
          <Switch>
            <Route exact path="/" component={Schedule} />
            <Route exact path="/test" component={GeneralInfo} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/education" component={EducationalMaterials} />
            <Route exact path="/live" component={Live} />
            <Route exact path="/my-tournament" component={MySite} />
            <Route exact path="*" component={GeneralInfo} />
          </Switch>
          <ToastContainer />
        </Router>
      </Provider>
    </>
  );
}
export default App;
