import * as actionTypes from '../actions/actionTypes';

const initialState = {
  // TODO: separate into leftPlayer and rightPlayer arrays
  url: null,
  volume: 0.5,
  played: 0,
  loop: false,
  url: null,
  playing: true,
  muted: false,
  loaded: 0,
  duration: 0,
};

const onSongPlayed = ( state, action ) => {
  return {
        ...state,
        url: action.selectedSong,
        playing: true,
        loaded: 0,
        played: 0,
    }
}

const onPlayPause = ( state, action ) => {
  return {
      ...state,
      playing: !action.playing
    }
}

const stop = ( state, action ) => {
  // ...state,
  // url: null,
  // playing: !action.playing
}

const onSetVolume = ( state, action ) => {
  return {
    ...state,
    volume: parseFloat(action.value),
  }
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ON_SONG_PLAYED: return onSongPlayed( state, action );
        case actionTypes.ON_PLAY_PAUSE: return onPlayPause( state, action )
        case actionTypes.ON_SET_VOLUME: return onSetVolume( state, action )
        default: return state;
    }
};

export default reducer;
