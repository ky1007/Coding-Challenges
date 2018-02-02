import React from 'react';
import { withRouter } from 'react-router-dom';

class ApplicantCodingTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.users.id,     
      coding_test: '',
    };
    console.log(this.props.users);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFields = this.updateFields.bind(this);
  }

  componentDidMount() {
    this.codingTest.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.updateUser(user)
      .then(user => this.props.history.push('/thank_you'));
  }

  updateFields(field) {
    return e => this.setState({[field]: e.target.value });
  }

  render() {
    const { coding_test } = this.state;

    return (
      <div>
        <h1>Application to App Academy</h1>
        <h2>The last step of this application is a coding challenge. Please read the challenge below.</h2>
        <p>Given an array of integers, return indices of the two numbers such that they add up to a specific target. <br/>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
        <form>
          <textarea ref={(input) => { this.codingTest = input; }}
                  placeholder='Type code here'
                  value={coding_test}
                  onChange={this.updateFields('coding_test')} />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ApplicantCodingTest);
