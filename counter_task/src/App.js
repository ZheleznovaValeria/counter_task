import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './login.js';
import Counter from './counter';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/counter" component={Counter} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
