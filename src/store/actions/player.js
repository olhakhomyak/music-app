import * as actionTypes from './actionTypes';

export const onSongPlayed = ( selectedSong, side ) => {
    return {
        type: actionTypes.ON_SONG_PLAYED,
        selectedSong,
        side,
    };
};

export const onPlayPause = ( songUrl, side ) => {
    return {
        type: actionTypes.ON_PLAY_PAUSE,
        songUrl,
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
