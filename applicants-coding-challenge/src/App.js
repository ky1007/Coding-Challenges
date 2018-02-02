import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ApplicantFormContainer from './components/applicant/applicant_form_container';
import ApplicantCodingTestContainer from './components/applicant/applicant_coding_test_container';
import ThankYou from './components/applicant/applicant_thank_you';
import AdminLink from './components/admin/admin_link';
import AdminPipelineContainer from './components/admin/admin_pipeline_container';

class App extends Component {
  render() {
    return (
    <div className="container">
      <Route path='/' component={AdminLink} activeClassName='hide' />
      <Switch>
        <Route exact path="/" component={ApplicantFormContainer} />
        <Route exact path="/coding_test" component={ApplicantCodingTestContainer} />
        <Route exact path="/thank_you" component={ThankYou} />
        <Route exact path="/administrator" component={AdminPipelineContainer} />
      </Switch>
    </div>
    );
  }
}

export default App;
