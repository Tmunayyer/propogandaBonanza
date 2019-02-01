import React from 'react';

const PubDropdown = (props) => {
  return (
    <select>
      {props.publishers.data.sources.map((publisher, i) => {
        return <option key={i}>{publisher.name}</option>;
      })}
    </select>
  );
};

export default PubDropdown;
