import React from 'react';
import { GeneralInfo, WIP } from './containers';
import TestComponents from 'containers/TestComponents';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
const sections = [
  { title: 'Información general', to: '/' },
  { title: 'Horario', to: '/schedule' },
  { title: 'Materiales', to: '/education' },
  { title: 'En vivo', to: '/live' },
  { title: 'Mi sitio', to: '/my-tournament' },
];
function App() {
  return (
    <Router>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.title}>
              <Link to={section.to}> {section.title} </Link>
            </li>
          ))}
        </ul>
      </nav>
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
