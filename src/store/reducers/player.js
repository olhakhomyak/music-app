import * as actionTypes from '../actions/actionTypes';

const initialState = {
  left: {
    url: null,
    volume: 0.5,
    played: 0,
    loop: false,
    playing: false,
    muted: false,
    loaded: 0,
  },
  right: {
    url: null,
    volume: 0.5,
    played: 0,
    loop: false,
    playing: false,
    muted: false,
    loaded: 0,
  }
};

const onSongPlayed = ( state, action ) => {
  return {
      ...state,
      [action.side]: {
        ...state[action.side],
        url: action.selectedSong,
        playing: true,
      }
    }
  }

const onPlayPause = ( state, action ) => {
  return {
      ...state,
      [action.side]: {
        ...state[action.side],
        playing: !action.playing,
      }
    }
}

const onStop = ( state, action ) => {
  return {
    ...state,
    [action.side]: {
      ...state[action.side],
      url: null,
      playing: false,
      played: 0,
    }
  }
}

const onSetVolume = ( state, action ) => {
  return {
    ...state,
    [action.side]: {
      ...state[action.side],
      volume: parseFloat(action.value),
      playing: true,
    }
  }
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ON_SONG_PLAYED: return onSongPlayed( state, action );
        case actionTypes.ON_PLAY_PAUSE: return onPlayPause( state, action )
        case actionTypes.ON_SET_VOLUME: return onSetVolume( state, action )
        case actionTypes.ON_STOP: return onStop( state, action )
        default: return state;
    }
};

export default reducer;
