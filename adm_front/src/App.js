import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Listar } from './pages/Listar';
import { Visualizar } from './pages/Visualizar';
import { Cadastrar } from './pages/Cadastrar';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/listar" component={Listar} />
          <Route exact path="/visualizar" component={Visualizar} />
          <Route exact path="/cadastrar" component={Cadastrar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
