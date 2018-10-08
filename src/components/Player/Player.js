import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import Button from '../Button/Button';
import './Player.scss';

const Player = ( props ) => {
    const { config: { url, playing, volume }, side, list } = props
    const songUrl = url || list[0]
    const playPauseBtn = playing ?
      (<Button
        clicked={() => props.playPause(playing, side)}
        icon="pause"
       />) :
      (<Button
        clicked={() => props.playPause(playing, side)}
        icon="play"
       />)
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
         <Button
           clicked={() => props.playPause(playing, side)}
           icon="stop"
          />
        <Button
          clicked={() => props.playPrev(side)}
          icon="backward"
         />
         { playPauseBtn }
         <Button
           clicked={() => props.playNext(side)}
           icon="forward"
          />
         <input
           type='range'
           min={ 0 }
           max={ 1 }
           step='any'
           value={ volume }
           onChange={(e) => props.setVolume(e.target.value, side)} />
       </div>
    </Fragment>
  )
};

export default Player;
