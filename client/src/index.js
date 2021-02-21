import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.scss';

import HomePage from './components/HomePage';
import DeployPage from './components/DeployPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/l">
            <DeployPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
