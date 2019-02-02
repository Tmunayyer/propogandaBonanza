import React from 'react';
import Gauge from 'react-svg-gauge';

const MyGauge = (props) => {
  let sum = 0;
  let count = props.analytics.length;
  props.analytics.forEach((elem) => {
    sum += elem.score;
  });
  return (
    <Gauge
      value={Math.round((sum * 100) / count)}
      width={400}
      height={400}
      label={'Average sentiment'}
    />
  );
};

export default MyGauge;
