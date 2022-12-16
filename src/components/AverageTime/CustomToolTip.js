import React from 'react';
import PropTypes from 'prop-types';

function CustomToolTip({ active, payload}) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip__label">{`${payload[0].value}`}mn</p>
      </div>
    );
  }

  return null;
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default CustomToolTip;