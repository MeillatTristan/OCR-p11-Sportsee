import React from 'react';
import KeyDataCard from '../KeyDataCard/KeyDataCard';
import PropTypes from 'prop-types';

import "./mainData.css"

/**
 * Component for contain keyDataCard 
 * 
 * @param {objet} keyData
 * @example
 * const keyData = {
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50
      }
 * return (
 *   <MainData data={keyData} /> 
 * )
 */
function MainData(props) {
  const keyData = props.data;

  return (
    <div className='keyDatas'>
      <KeyDataCard dataType={"calorie"} data={keyData.calorieCount} />
      <KeyDataCard dataType={"proteine"} data={keyData.proteinCount} />
      <KeyDataCard dataType={"glucide"} data={keyData.carbohydrateCount} />
      <KeyDataCard dataType={"lipide"} data={keyData.lipidCount} />
    </div>
  );
}

MainData.propTypes = {
  data : PropTypes.object
}

export default MainData;