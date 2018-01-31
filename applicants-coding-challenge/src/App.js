import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ApplicantFormContainer from './components/applicant_form_container';
import ApplicantCodingTestContainer from './components/applicant_coding_test_container';
import ThankYou from './components/applicant_thank_you';
import AdminLink from './components/admin_link';

class App extends Component {
  render() {
    return (
    <div>
      <Route path='/' component={AdminLink} />
      <Switch>
        <Route exact path="/" component={ApplicantFormContainer} />
        <Route exact path="/coding_test" component={ApplicantCodingTestContainer} />
        <Route exact path="/thank_you" component={ThankYou} />
      </Switch>
    </div>
    );
  }
}

export default App;
