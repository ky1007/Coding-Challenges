import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { updateUser } from '../actions/user_actions';
import ApplicantCodingTest from './applicant_coding_test';

// const mapStateToProps = (state) => {
//   return state;
// };

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantCodingTest);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ApplicantCodingTest));
