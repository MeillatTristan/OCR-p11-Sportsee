import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import "./scoreChart.css"

/**
 * Component for generate chart of score objectif of the user
 * 
 * @param {number} scoreChart
 * @example
 * const score = 0.12
 * return (
 *   <ScoreChart score={score} />
 * )
 */
function ScoreChart(props) {
  const score = [
    { name: "complete", score: props.score, fill : "#FF0000" },
    { name: "not complete", score: 1 - props.score, fill : "transparent" },
  ];


  return (
    <div className='containerScore'>
      <h2 className='containerScore__title'>Score</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie 
            data={score} 
            dataKey="score" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            outerRadius={100} 
            innerRadius={85}
            startAngle={90}
            endAngle={450}
            cornerRadius="50%"
            />
        </PieChart>
      </ResponsiveContainer>
      <span className='containerScore__score'>
        <strong>{`${100 * score[0].score}%`}</strong>
        <br />
        de votre
        <br />
        objectif
      </span>
    </div>
  );
}

ScoreChart.propTypes = {
  score : PropTypes.number
}

export default ScoreChart;