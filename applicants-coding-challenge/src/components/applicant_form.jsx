import React from 'react';

class ApplicantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      zip_code: '',
      user_type_id: 1,      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = this.state;
    this.props.createUser(user)
      .then(goal => this.props.history.push(`/coding_test/${user.id}`));
  }

  updateEntry(field) {
    return e => this.setState({[field]: e.target.value });
  }

  render() {
    const { first_name, last_name, zip_code, email } = this.state;

    return (
      <div>
        <h1>Application to App Academy</h1>
        <h2>We invite you to apply to App Academy and start your journey towards becoming a software developer here</h2>
        <p>After submitting this application, you will be asked submit a coding test.</p>
        <form>
          <input ref={(input) => { this.nameInput = input; }}
                  placeholder='First Name'
                  value={first_name}
                  onChange={this.updateEntry('first_name')} />

          <input placeholder='Last Name'
                  value={last_name}
                  onChange={this.updateEntry('last_name')} />

          <input placeholder='Email Address'
                  value={email}
                  onChange={this.updateEntry('email')} />

          <input placeholder='Zip Code'
                  value={zip_code}
                  onChange={this.updateEntry('zip_code')} />

          <button onClick={this.handleSubmit} className="entry-form-button entry-submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default ApplicantForm;
