import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import './Player.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Player = ( props ) => {
    const { url, playing, volume } = props.config
    const songUrl = url || props.list[0]
    const playPauseBtn = playing ?
      (<button
        onClick={ () => props.playPause(playing, props.side) }
        className="btnPlayerControl">
          <FontAwesomeIcon icon="pause"/>
      </button>) :
      (<button
        onClick={ () => props.playPause(playing, props.side) }
        className="btnPlayerControl">
          <FontAwesomeIcon icon="play"/>
      </button>)

    return (
      <Fragment>
        <ReactPlayer
          url={ songUrl }
          playing={ playing }
          volume={ volume }
          controls={ false }
          width='100%'
         />
       <div className="PlayerControls">
         <button
           onClick={ () => props.stopSong(props.side) }
           className="btnPlayerControl">
           <FontAwesomeIcon icon="stop"/>
         </button>
         { playPauseBtn }
         <input
           type='range'
           min={ 0 }
           max={ 1 }
           step='any'
           value={ props.volume }
           onChange={ (e) => props.setVolume(e.target.value, props.side) } />
       </div>
    </Fragment>
  )
};

export default Player;
