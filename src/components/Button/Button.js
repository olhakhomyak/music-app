import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ( props ) => {
  const { icon, clicked } = props;

  return(
    <button
      onClick={ clicked }
      className="btnPlayerControl">
      <FontAwesomeIcon icon={ icon } />
    </button>
  )
};

export default Button;
