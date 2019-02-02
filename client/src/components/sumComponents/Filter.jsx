import React from 'react';

const Filter = (props) => {
  if (props.displayFilter) {
    return (
      <>
        <div>
          <button onClick={props.toggleFilter}>Keyword Filter</button>
          <input
            type="text"
            onChange={props.handleFilterChange}
            value={props.filterValue}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <button onClick={props.toggleFilter}>Keyword Filter</button>
        </div>
      </>
    );
  }
};

export default Filter;
