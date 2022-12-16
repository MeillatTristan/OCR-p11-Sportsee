import React from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import "./performanceChart.css"

/**
 * Component for generate chart of performance with 6 branch
 * 
 * @param {objet} performance
 * @example
 * const performance = {
      userId: 18,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 200,
              kind: 1
          },
          {
              value: 240,
              kind: 2
          },
          {
              value: 80,
              kind: 3
          },
          {
              value: 80,
              kind: 4
          },
          {
              value: 220,
              kind: 5
          },
          {
              value: 110,
              kind: 6
          }
      ]
  }
 * return (
 *   <MainData data={performance} /> 
 * )
 */
function PerformanceChart(props) {
  const performance = props.performance;
  return (
    <div className='containerPerformance'>
      <ResponsiveContainer>
        <RadarChart outerRadius="80%"  data={performance.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis 
            dataKey="kind" 
            stroke="white"
            tickLine={false}
            dy={3} 
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }} 
          />
          <Radar name="Mike" dataKey="value" stroke="transparent" fill="rgb(255, 1, 1)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes = {
  performance : PropTypes.object
}

export default PerformanceChart;