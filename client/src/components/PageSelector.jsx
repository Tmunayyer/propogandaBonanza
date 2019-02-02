import React from 'react';

const PageSelector = (props) => {
  return (
    <>
      <button onClick={props.handlePageChange} value="Search Page">
        Search Page
      </button>
      <button onClick={props.handlePageChange} value="Summary Page">
        Summary Page
      </button>
    </>
  );
};

export default PageSelector;
