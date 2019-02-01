import React from 'react';
import { Component } from 'react';

import SearchBar from './SearchBar.jsx';

import analyzeData from '../utility/axiosRequest.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    console.log(query);
    // analyzeData(query, (analyzed_data) => {
    //   this.setState({
    //     data: analyzed_data
    //   });
    // });
  }

  render() {
    return <SearchBar handleSearch={this.handleSearch} />;
  }
}

export default App;
