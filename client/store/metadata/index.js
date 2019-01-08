import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './actions';

const mapStateToProps = (state) => {
  return { metadata: state.metadata };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
});

export default (App) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
