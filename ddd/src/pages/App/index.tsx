import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from '../Login';

import './styles.css';
import { PageLayout } from '../../components/PageLayout';
import { Producer } from '../Producer';
import { Consumer } from '../Consumer';
import { Contributor } from '../Contributor';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>

        <Route path='/consumer'>
          <PageLayout>
            <Consumer />
          </PageLayout>
        </Route>

        <Route path='/producer'>
          <PageLayout>
            <Producer />
          </PageLayout>
        </Route>

        <Route path='/contributor'>
          <PageLayout>
            <Contributor />
          </PageLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
