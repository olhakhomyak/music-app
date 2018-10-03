import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';


const Header = ( props ) => {
  return(
    <header className="HeaderContainer">
      <NavLink
        to='/upload'
        className="HeaderContainer--Link"
        >
        <span>Tracks</span>
      </NavLink>
      <NavLink
        onClick={ props.clicked }
        to='/dj-controller'
        className="HeaderContainer--Link"
        >
        <span>DJ Controller</span>
      </NavLink>
    </header>
  )
};

export default Header;
