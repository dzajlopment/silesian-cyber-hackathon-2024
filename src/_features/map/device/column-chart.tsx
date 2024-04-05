import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis} from 'victory';

const data = [
  {day: '12:00', measurement: 80},
  {day: '12:15', measurement: 100},
  {day: '12:30', measurement: 50},
  {day: '12:45', measurement: 120},
  {day: '13:00', measurement: 90},
  {day: '13:15', measurement: 100},
  {day: '13:30', measurement: 50},
  {day: '13:45', measurement: 120},
  {day: '14:00', measurement: 90},
  {day: '14:15', measurement: 100},
  {day: '14:30', measurement: 50},
  {day: '14:45', measurement: 120},
  {day: '15:00', measurement: 90},
];

const ColumnChart = () => {
  return (
    <VictoryChart domainPadding={20} height={300} width={400}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={data.map((datum) => datum.day)}
      />
      <VictoryAxis dependentAxis tickFormat={(t) => `${t}`} />
      <VictoryBar
        data={data}
        x="day"
        y="measurement"
        style={{data: {fill: '#FF883F'}}}
      />
    </VictoryChart>
  );
};

export default ColumnChart;
