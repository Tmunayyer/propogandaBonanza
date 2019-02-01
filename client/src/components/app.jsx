import React from 'react';
import { Component } from 'react';

import SearchBar from './SearchBar.jsx';
import ResultsTable from './ResultsTable.jsx';

import utilities from '../utility/axiosRequest.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      analytics: [],
      chosenPublisher: 'ABC News',
      publishers: []
    };
    this.handleSearch = this.handleSearch.bind(this);
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

  componentDidMount() {
    utilities.getPublications((response_data) => {
      this.setState({
        publishers: response_data
      });
    });
  }
  render() {
    if (this.state.publishers.length <= 0) return <div />;
    return (
      <>
        <SearchBar
          handleSearch={this.handleSearch}
          publishers={this.state.publishers}
        />
        <ResultsTable
          articles={this.state.articles}
          analytics={this.state.analytics}
        />
      </>
    );
  }
}

export default App;
