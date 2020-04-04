import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from "../Login";

import "./styles.css";
import { PageLayout } from '../../components/PageLayout';

function App() {
  return (
    <div className='background'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/contributor'>
            <PageLayout>
              <span>it works!</span>
              <Link to='/'>Back</Link>
            </PageLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
