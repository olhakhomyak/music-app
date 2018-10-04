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
          onClick={ props.onReady }
          className="Button">
          <FontAwesomeIcon icon="play" />
        </button>
     </div>
  const songClasses = props.active ? 'songUrl active' : 'songUrl'

  return(
    <Fragment>
      <span className={ songClasses }>
        { props.song }
      </span>
      { controlBtn }
    </Fragment>
  )
};

export default SongItem;
