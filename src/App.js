import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import NavBar from './components/nav/navbar'
import Login from './components/auth/login'
import Form from './components/form/form'


class App extends Component {
  render() {
    return (
              <Fragment>
                <NavBar />
                  <Route exact path="/" component={Login} />
                  <Route exact path="/form" component={Form} />
                  <Route exact path="/dashboard" component={Dashboard} />
              </Fragment>
            );
  }
}

export default App;