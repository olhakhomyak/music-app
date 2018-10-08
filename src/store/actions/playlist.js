import * as actionTypes from './actionTypes';

export const addSong = ( songUrl, side ) => {
    return {
        type: actionTypes.ADD_SONG,
        songUrl,
        side,
    };
};

export const removeSong = ( songUrl, side ) => {
    return {
        type: actionTypes.REMOVE_SONG,
        songUrl,
        side,
    };
};

export const clearPlaylist = () => {
    return {
      type: actionTypes.CLEAR_PLAYLIST,
    };
};
