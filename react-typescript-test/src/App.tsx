import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Globalstyle } from './styles/GlobalStyles'
import Login from './views/Login'
import Admin from './views/Admin'

function App() {
  return (
    <>
      <Globalstyle />
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
