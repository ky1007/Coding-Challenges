import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ApplicantFormContainer from './components/applicant_form_container';
import ApplicantCodingTestContainer from './components/applicant_coding_test_container';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ApplicantFormContainer} />
        <Route exact path="/coding_test" component={ApplicantCodingTestContainer} />
      </Switch>
    );
  }
}

export default App;
