import React from 'react';
import { Link } from 'react-router-dom';

import iconMuscu from "../../assets/images/iconMuscu.png";
import iconBike from "../../assets/images/iconBike.png";
import iconSwim from "../../assets/images/iconSwim.png";
import iconMeditation from "../../assets/images/iconMeditation.png";

import "./sidebar.css"

function Sidebar(props) {
  return (
    <div className='sidebar'>
      <ul className='sidebar__nav'>
        <li className='sidebar__nav__item'> <Link><img src={ iconMeditation } alt="icon Meditation" /></Link> </li>
        <li className='sidebar__nav__item'> <Link><img src={ iconSwim } alt="icon Swim" /></Link> </li>
        <li className='sidebar__nav__item'> <Link><img src={ iconBike } alt="icon Bike" /></Link> </li>
        <li className='sidebar__nav__item'> <Link><img src={ iconMuscu } alt="icon Muscu" /></Link> </li>
      </ul>
      <div className='sidebar__copyright'>Copiryght, SportSee 2020</div>
    </div>
  );
}

export default Sidebar;