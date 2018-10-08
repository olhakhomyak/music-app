import * as actionTypes from './actionTypes';
import store from '../store/store';

export const onSongPlayed = ( selectedSong, side ) => {
  return {
      type: actionTypes.ON_SONG_PLAYED,
      selectedSong,
      side,
  };
};

export const onPlayNext = ( side ) => {
  const playlist =  store.getState().playlist

  return {
      type: actionTypes.ON_PLAY_NEXT,
      playlist,
      side,
  };
};

export const onPlayPrev = ( side ) => {
  const playlist =  store.getState().playlist
  
  return {
      type: actionTypes.ON_PLAY_PREV,
      playlist,
      side,
  };
};


export const onPlayPause = ( playing, side ) => {
  return {
      type: actionTypes.ON_PLAY_PAUSE,
      playing,
      side,
  };
};

export const onSetVolume = ( value, side ) => {
    return {
        type: actionTypes.ON_SET_VOLUME,
        value,
        side,
    };
};

export const onStop = ( side ) => {
    return {
        type: actionTypes.ON_STOP,
        side,
    };
};
