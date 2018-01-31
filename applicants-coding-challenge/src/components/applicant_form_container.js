import { connect } from 'react-redux';
import { createUser } from '../actions/user_actions';
import ApplicantForm from './applicant_form';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantForm);
