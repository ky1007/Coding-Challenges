import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import ApplicantCodingTest from './applicant_coding_test';
import { values } from 'lodash';

const mapStateToProps = ({ users }) => ({
  users: values(users)[0]
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantCodingTest);
