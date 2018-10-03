import * as actionTypes from '../actions/actionTypes';

const initialState = {
    lists: {
      left: [],
      right: [],
    },
};

const addSong = ( state, action ) => {
  return {
    ...state,
    lists: {
      ...state.lists,
      [action.side]: [...state.lists[action.side], action.songUrl],
      }
  }
};

const removeSong = ( state, action ) => {
  return {
    ...state,
    lists: {
      ...state.lists,
      [action.side]: state.lists[action.side].filter(el => el !== action.songUrl)
    }
  }
};

const clearPlaylist = ( state, action ) => {
  return { lists: state.lists = [] }
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_SONG: return addSong( state, action );
        case actionTypes.REMOVE_SONG: return removeSong( state, action )
        default: return state;
    }
};

export default reducer;
