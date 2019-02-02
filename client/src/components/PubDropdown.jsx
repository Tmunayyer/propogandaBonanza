import React from 'react';

const PubDropdown = (props) => {
  let displayDropdown = { display: 'none' };
  if (props.show) displayDropdown = {};
  return (
    <select style={displayDropdown} onChange={props.handlePubChange}>
      {props.publishers.data.sources.map((publisher, i) => {
        return <option key={i}>{publisher.name}</option>;
      })}
    </select>
  );
};

export default PubDropdown;
