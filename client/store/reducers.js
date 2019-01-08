import { combineReducers } from 'redux';
import metadata from './metadata/actions';
import ui from './ui/actions';

export default combineReducers({
  metadata,
  ui
});
