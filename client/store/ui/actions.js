export const constants = {
  SELECTED_SONG: 'SELECTED_SONG' 
};

export const actions = {
  selectSong: (song) => ({
    type: constants.SELECTED_SONG,
    song
  })
};

const initialState = {
  selectedSong: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case constants.SELECTED_SONG:
    return Object.assign({}, state, {selectedSong: action.song});
  default:
    return state;
  }
};
