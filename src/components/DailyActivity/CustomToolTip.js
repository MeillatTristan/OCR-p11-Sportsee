import React from 'react';

function CustomToolTip({ active, payload}) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip__label">{`${payload[0].value}`}Kg</p>
        <p className="custom-tooltip__label cal">{`${payload[1].value}`}Kcal</p>
      </div>
    );
  }

  return null;
}

export default CustomToolTip;