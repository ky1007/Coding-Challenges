import React from 'react';
import { withRouter } from 'react-router-dom';
import ApplicantProfile from '../applicant/applicant_profile';

class AdminPipeline extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <h1>App Academy Applicants</h1>
        <h2>Here is a list of propsective App Academy students. Please note you can only accept or reject a student if and only if they have submitted a coding test.</h2>

        {users.map(applicant => <ApplicantProfile key={applicant.id} 
                                                  applicant={applicant} 
                                                  updateUser={this.props.updateUser} />)}
      </div>
    );
  }
}

export default withRouter(AdminPipeline);
