import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ApplicantFormContainer from './components/applicant_form_container';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ApplicantFormContainer} />
      </Switch>
    );
  }
}

export default App;
