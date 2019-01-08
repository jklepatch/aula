import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './actions';

const mapStateToProps = (state) => {
  return { ui: state.ui };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
});

export default (App) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
