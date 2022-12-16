import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import "./averageTime.css"
import CustomToolTip from './CustomToolTip';
import PropTypes from 'prop-types';


/**
 * Component for generate charts of average sessions time.
 *
 * @param {aray} props.sessions
 * 
 * @example
 * const sessions = [
          {
              day: 1,
              sessionLength: 30
          },
          {
              day: 2,
              sessionLength: 23
          },
          {
              day: 3,
              sessionLength: 45
          },
          {
              day: 4,
              sessionLength: 50
          },
          {
              day: 5,
              sessionLength: 0
          },
          {
              day: 6,
              sessionLength: 0
          },
          {
              day: 7,
              sessionLength: 60
          }
      ]
 * return (
 *   <AverageTime sessions={sessions} />
 * )
 */
function AverageTime(props) {
  const sessions = props.sessions


  return (
    <div className='containerAverage'>
      <h2 className='containerAverage__title'>Durée moyenne des <br/> sessions</h2>
      <ResponsiveContainer height={185}>
        <LineChart
          width={730}
          data={sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis 
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          axisLine={false}
          tickLine={false}
          dy={10}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
          />
          <YAxis orientation="right" hide={true} domain={['dataMin-10', 'dataMax+5']}  />
          <Tooltip
            wrapperStyle={{ 
              outline: "none", 
              width: "10px"
            }}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
            content={<CustomToolTip />}
          />
          <Line 
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: 'rgba(255, 255, 255, 0.198345)', strokeWidth: 10, r: 4, color:'red' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
AverageTime.propTypes = {
  sessions: PropTypes.array
};

export default AverageTime;