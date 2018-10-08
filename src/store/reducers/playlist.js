import * as actionTypes from '../actions/actionTypes';

const initialState = {
    left: [],
    right: [],
};

const addSong = ( state, action ) => {
  return {
    ...state,
    [action.side]: [...state[action.side], action.songUrl],
  }
};

const removeSong = ( state, action ) => {
  return {
    ...state,
    [action.side]: [action.side].filter(el => el !== action.songUrl),
  };
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
      case actionTypes.ADD_SONG: return addSong( state, action );
      case actionTypes.REMOVE_SONG: return removeSong( state, action );
      default: return state;
    }
};

export default reducer;
