import dispatch from 'redux';
import { createAction } from '../utils';

export const constants = {
  GET_METADATA_LIST: createAction('GET_METADATA_LIST'),
};

export const actions = {
  getMetadataList: () => ({
    type: constants.GET_METADATA_LIST.ACTION
  })
};

const initialState = {
  metadata: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_METADATA_LIST.SUCCESS:
      return Object.assign({}, state, {metadata: action.metadata});
      break;
    default:
      return state;
  }
}
