import React from 'react';
import PropTypes from 'prop-types';

import "./title.css";

function Title(props) {
  return (
    <div className='title'>
      <h1>Bonjour <span className='red'>{ props.name }</span></h1>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </div>
  );
}

Title.propTypes = {
  name: PropTypes.string
}

export default Title;