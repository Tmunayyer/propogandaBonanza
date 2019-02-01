import React from 'react';
import { Component } from 'react';

import SearchBar from './SearchBar.jsx';
import PubDropdown from './PubDropdown.jsx';

import utilities from '../utility/axiosRequest.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      publishers: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    utilities.analyzeData(query, (analyzed_data) => {
      this.setState({
        data: analyzed_data
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
        <PubDropdown publishers={this.state.publishers} />
        <SearchBar handleSearch={this.handleSearch} />
      </>
    );
  }
}

export default App;
