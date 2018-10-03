import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SongItem.scss';

const SongItem = ( props ) => {
  const controlBtn = props.displayControl
    ? <button
        onClick={ props.onRemove }
        className="Button">
        <FontAwesomeIcon icon="trash-alt" />
      </button>
    : <div>
        <button
          onClick={ props.onPlay }
          className="Button">
          <FontAwesomeIcon icon="play-circle" />
        </button>
     </div>
  return(
    <Fragment>
      <span className="songUrl">
        { props.song }
      </span>
      { controlBtn }
    </Fragment>
  )
};

export default SongItem;
