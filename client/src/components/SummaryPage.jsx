import React from 'react';
import { Component } from 'react';

import PublicationSelector from './sumComponents/PublicationSelector.jsx';
import MyBarChart from './sumComponents/BarChart.jsx';

class SummaryPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.publishers.data === undefined);
    if (this.props.publishers.data !== undefined) {
      return (
        <>
          <PublicationSelector publishers={this.props.publishers} />
          <MyBarChart />
          <p>Summary Page</p>
        </>
      );
    } else {
      return <p>yo</p>;
    }
  }
}

export default SummaryPage;
