import React from 'react';
import { Component } from 'react';

import PageSelector from './PageSelector.jsx';
import SearchBar from './SearchBar.jsx';
import MyGauge from './Gauge.jsx';
import ResultsTable from './ResultsTable.jsx';
import SummaryPage from './SummaryPage.jsx';

import utilities from '../utility/axiosRequest.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      analytics: [],
      chosenPublisher: 'ABC News',
      publishers: {},
      page: 'Summary Page'
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleSearch(publisher, query) {
    let searchParams = {
      publisher: publisher,
      query: query
    };
    utilities.analyzeData(searchParams, (server_package) => {
      this.setState({
        articles: server_package.data.articles,
        analytics: server_package.data.analytics.documents
      });
    });
  }
  handlePageChange(event) {
    this.setState({
      page: event.target.value
    });
  }

  componentDidMount() {
    utilities.getPublications((response_data) => {
      this.setState({
        publishers: response_data
      });
    });
  }
  render() {
    if (this.state.page === 'Search Page') {
      return (
        <>
          <div>
            <PageSelector handlePageChange={this.handlePageChange} />
          </div>
          <br />
          <SearchBar
            handleSearch={this.handleSearch}
            publishers={this.state.publishers}
          />
          <div>
            <MyGauge analytics={this.state.analytics} />
          </div>
          <ResultsTable
            articles={this.state.articles}
            analytics={this.state.analytics}
          />
        </>
      );
    } else if (this.state.page === 'Summary Page') {
      return (
        <>
          <PageSelector handlePageChange={this.handlePageChange} />
          <SummaryPage
            publishers={this.state.publishers}
            data={this.state.analytics}
          />
        </>
      );
    }
  }
}

export default App;
