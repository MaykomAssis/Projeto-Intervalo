import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import Vagas from '../Component/Vagas';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Vagas" component={Vagas} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
