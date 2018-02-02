import React from 'react';

class ApplicantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_coding_test: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  handleDecision(e) {
    e.preventDefault();
  }

  toggle(e) {
    e.preventDefault();
    this.setState({ show_coding_test: !this.state.show_coding_test });
  }

  onlyShowDecidedApplicants() {
    
  }

  render() {
    const { applicant } = this.props;
    const decide = decision => ({
      id: applicant.id,
      admitted: decision,
    });
    const coding_test = this.state.show_coding_test ? applicant.coding_test : null;

    return (
      <article className="applicant-profile">
        <h3>{`${applicant.first_name} ${applicant.last_name}`}</h3>
        {`Email: ${applicant.email}`}<br />
        {`Zip Code: ${applicant.zip_code}`}<br />
        {applicant.coding_test ? 
          <div><span onClick={this.toggle}>coding toggle</span>
          <br />{coding_test}<button onClick={() => this.props.updateUser(decide(true))}>Admit</button>
          <button onClick={() => this.props.updateUser(decide(false))}>Deny</button></div> 
          : 
          'No coding test was submitted'}
      </article>
    );
  }
}

export default ApplicantProfile;
