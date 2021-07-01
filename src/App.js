import React from 'react';
import './App.css';
import { GeneralInfo, Live, EducationalMaterials, Schedule, MySite, About } from './containers';
import { Tabs, Banner, Footer } from './components';
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
            <Route exact path="/" component={GeneralInfo} />
            <Route exact path="/test" component={GeneralInfo} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/education" component={EducationalMaterials} />
            <Route exact path="/live" component={Live} />
            <Route exact path="/my-tournament" component={MySite} />
            <Route exact path="/about" component={About} />
            <Route exact path="*" component={GeneralInfo} />
          </Switch>
          <ToastContainer />
          <Footer />
        </Router>
      </Provider>
    </>
  );
}
export default App;
