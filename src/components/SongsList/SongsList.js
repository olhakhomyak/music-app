import React from 'react';
import SongItem from './SongItem/SongItem';
import './SongsList.scss';

const SongsList = ( props ) => {
  const { songs, side, displayControl } = props
  const playlist = songs.map((song, index) => (
    <div key={ song } className="SongRow">
      <span className="SongNr">{ index + 1 }.</span>
      <SongItem
          song={ song }
          displayControl={ displayControl }
          onRemove={() => props.onRemoveHandler(song, side)}
          onPlay={() => props.onPlayHandler(song)}
         />
    </div>))


  const list = songs.length
  ?  (
    <div>
      <h3>{ side } playlist</h3>
        <div>{ playlist }</div>
    </div>)
    : <h3>Your { side } playlist is empty now...</h3>
  return(
    <div>{ list }</div>
  )
};

export default SongsList;
