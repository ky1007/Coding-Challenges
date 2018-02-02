import { connect } from 'react-redux';
import { applicationDecision } from '../../actions/user_actions';
import ApplicantProfile from './applicant_profile';

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => ({
  applicationDecision: user => dispatch(applicationDecision(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantProfile);
