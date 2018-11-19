import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import NavBar from './components/nav/navbar'
import Login from './components/auth/login'


class App extends Component {
  render() {
    return (
              <Fragment>
                <NavBar />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/" component={Login} />
              </Fragment>
            );
  }
}

export default App;