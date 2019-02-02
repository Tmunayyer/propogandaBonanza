import React from 'react';

const PublicationSelector = (props) => {
  const makeDynamicTableRows = (props) => {
    let jsx = [];
    let count = 0;
    for (
      let i = 0;
      i < Math.ceil(props.publishers.data.sources.length / 10);
      i++
    ) {
      let row = [];
      for (let k = 0; k <= 10; k++) {
        if (props.publishers.data.sources[count] !== undefined) {
          row.push(
            <td>
              <button
                onClick={props.handleClick}
                value={props.publishers.data.sources[count].name}
              >
                {props.publishers.data.sources[count].name}
              </button>
            </td>
          );
        }
        count++;
      }
      jsx.push(row);
    }

    const output = jsx.map((row) => {
      return <tr>{row}</tr>;
    });
    return output;
  };

  if (props.publishers.data !== undefined) {
    return (
      <table>
        <tbody>{makeDynamicTableRows(props)}</tbody>
      </table>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default PublicationSelector;
