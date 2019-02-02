import React from 'react';
import { BarChart, XAxis, YAxis, Bar } from 'recharts';

const MyBarChart = (props) => {
  return (
    <BarChart width={600} height={300} data={props.data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar type="monotone" dataKey="amt" fill="#8884d8" />
    </BarChart>
  );
};

export default MyBarChart;
