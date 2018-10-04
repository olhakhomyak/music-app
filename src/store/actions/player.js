import * as actionTypes from './actionTypes';

export const onSongPlayed = ( selectedSong, side ) => {
    return {
        type: actionTypes.ON_SONG_PLAYED,
        selectedSong,
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
