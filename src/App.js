import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './home';
import Form from './form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Home office score app
      </header>
      <section>
        <Router>
          <Switch>
            <Route path="/questionario">
              <Form />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
