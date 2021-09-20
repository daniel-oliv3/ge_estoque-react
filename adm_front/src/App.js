import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Listar } from './pages/Listar';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/listar" component={Listar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
