import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import CustomToolTip from './CustomToolTip';
import PropTypes from 'prop-types';

import "./dailyActivity.css";

/**
 * Component for generate charts of daily activity.
 * 
 * @param {array} props.activity
 *
 * @example
 * const sessions =  [
          {
              day: '2020-07-01',
              kilogram: 70,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 69,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 70,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 70,
              calories: 500
          },
          {
              day: '2020-07-05',
              kilogram: 69,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 69,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 69,
              calories: 390
          }
      ]
 * return (
 *   <DailyActivity activity={sessions} />
 * )
 */
function DailyActivity(props) {



  return (
    <div className='ActivityGraph'>
      <h2 className='ActivityGraph__title'>Activité quotidienne</h2>
      <ResponsiveContainer height={300}>
        <BarChart
          width={1000}
          height={300}
          data={props.activity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day"/>
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            domain={['dataMin-2', 'dataMax+1']}
            tickCount="3"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            style={{ marginLeft: '20px' }}
            dx={45}
            scale="auto"
            />
          <YAxis yAxisId="calories" dataKey="calories" hide={true} />
          <Tooltip content={<CustomToolTip />} wrapperStyle={{ outline: "none" }}/>
          <Legend 
            verticalAlign="top" 
            align="right"
            payload={
              [
                { id: 'kilogram', value: 'Poids (kg)', type: 'circle'},
                { id: 'calories', value: 'Calories brûlées (kCal)', type: 'circle', color: '#E60000', width: '8px'},
              ]
             }
            />
          <Bar name="Poids (kg)" dataKey="kilogram" yAxisId="kilogram" fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} />
          <Bar name="Calories brûlées (kCal)"  dataKey="calories" yAxisId="calories" barSize={7} fill="#E60000" radius={[5, 5, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

  DailyActivity.propTypes = {
    activity : PropTypes.array
  }

export default DailyActivity;