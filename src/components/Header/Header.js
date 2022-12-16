import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';
import logo from '../../assets/images/logo.png'


function Header(props) {
  return (
    <header className='navbar'>
      <ul className='navbar__containerLink'>
        <li className='navbar__containerLink__logo'> <img src={ logo } alt="logo" /> </li>
        <li className='navbar__containerLink__link'><NavLink>Accueil</NavLink></li>
        <li className='navbar__containerLink__link'><NavLink>Profil</NavLink></li>
        <li className='navbar__containerLink__link'><NavLink>Réglage</NavLink></li>
        <li className='navbar__containerLink__link'><NavLink>Communauté</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;