import React from 'react';
import SongItem from './SongItem/SongItem';
import './SongsList.scss';

const SongsList = ( props ) => {
  const { songs, side, displayControl, activeSong = null } = props;
  const playlist = songs.map((song, index) => {
    const songNrClasses = (song === activeSong) ? 'SongNr active' : 'SongNr'
    return (
      <div key={ song } className="SongRow">
        <span className={ songNrClasses }>{ index + 1 }</span>
        <SongItem
          song={ song }
          active= { song === activeSong }
          displayControl={ displayControl }
          onRemove={() => props.onRemoveHandler(song, side)}
          onReady={() => props.onPlayHandler(song, side)}
         />
     </div>
   );
 })
const list = songs.length
  ?  (<div>
        <h3>{ side } playlist</h3>
          <div>{ playlist }</div>
      </div>)
  : <h3>Your { side } playlist is empty now...</h3>

return(
    <div>{ list }</div>
  )
};

export default SongsList;
