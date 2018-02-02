import { connect } from 'react-redux';
import { updateUser, fetchUsers, applicationDecision } from '../../actions/user_actions';
import AdminPipeline from './admin_pipeline';
import { values } from 'lodash';

const mapStateToProps = ({ users }) => ({
  users: values(users),
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  updateUser: user => dispatch(updateUser(user)),
  // applicationDecision: user => dispatch(applicationDecision(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPipeline);
