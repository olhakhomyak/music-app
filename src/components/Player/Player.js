import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Player = ( props ) => {
    const { url, playing, volume, side } = props.config
    const songUrl = url || props.list[0]
    const playPauseBtn = playing ?
      (<button onClick={ () => props.playPause(songUrl, side) }>
          <span>Pause</span>
          <FontAwesomeIcon icon="pause-circle"/>
      </button>) :
      (<button onClick={ () => props.playPause(songUrl, side) }>
          <span>Play</span>
          <FontAwesomeIcon icon="play-circle"/>
      </button>)

    return (
      <Fragment>
        <ReactPlayer
          url={ songUrl }
          playing={ playing }
          volume={ volume }
          controls={ false }
         />
       <div className="PlayerControls">
         <button onClick={ props.stop }>
           <span>Stop </span>
           <FontAwesomeIcon icon="stop-circle"/>
         </button>
         { playPauseBtn }
         <input
           type='range'
           min={ 0 }
           max={ 1 }
           step='any'
           value={ props.volume }
           onChange={ (e) => props.setVolume(e.target.value, side) } />
       </div>
    </Fragment>
  )
};

export default Player;
