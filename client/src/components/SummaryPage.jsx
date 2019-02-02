import React from 'react';
import { Component } from 'react';

import PublicationSelector from './sumComponents/PublicationSelector.jsx';
import MyBarChart from './sumComponents/BarChart.jsx';
import Filter from './sumComponents/Filter.jsx';

import utilities from '../utility/axiosRequest.js';

class SummaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: '',
      showFilter: false
    };
    this.handleAddPublisherToChart = this.handleAddPublisherToChart.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFilterToggle = this.handleFilterToggle.bind(this);
  }
  handleAddPublisherToChart(PublisherName) {
    let filterQuery;
    if (this.state.filter !== '') {
      filterQuery = this.state.filter;
    }

    const getPackage = {
      name: PublisherName.target.value,
      filter: filterQuery
    };

    let name = PublisherName.target.value;
    utilities.getPublicationAverage(getPackage, (data) => {
      console.log(data);
      let sum = 0;
      for (var i = 0; i < data.data.analytics.documents.length; i++) {
        sum += data.data.analytics.documents[i].score * 100;
      }
      let average = Math.round(sum / data.data.analytics.documents.length);

      let newData = [...this.state.data];
      newData.push({ name: name, amt: average });
      this.setState({
        data: newData
      });
    });
  }
  handleFilterChange(event) {
    this.setState({
      filter: event.target.value
    });
  }
  handleFilterToggle() {
    this.setState({
      showFilter: !this.state.showFilter
    });
  }
  render() {
    if (this.props.publishers.data !== undefined) {
      return (
        <>
          <Filter
            handleFilterChange={this.handleFilterChange}
            filterValue={this.state.filter}
            toggleFilter={this.handleFilterToggle}
            displayFilter={this.state.showFilter}
          />
          <PublicationSelector
            publishers={this.props.publishers}
            handleClick={this.handleAddPublisherToChart}
          />
          <MyBarChart data={this.state.data} />
          <p>Summary Page</p>
        </>
      );
    } else {
      return <p>yo</p>;
    }
  }
}

export default SummaryPage;
