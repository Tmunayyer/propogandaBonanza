import React from 'react';
import { Component } from 'react';

import PubDropdown from './PubDropdown.jsx';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPublisher: 'ABC News',
      searchVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePubChange = this.handlePubChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      searchVal: event.target.value
    });
  }
  handleClick(event) {
    this.props.handleSearch(this.state.searchVal);
    this.setState({
      searchVal: ''
    });
  }
  handlePubChange(event) {
    this.setState({
      chosenPublisher: event.target.value
    });
  }
  render() {
    return (
      <>
        <PubDropdown
          publishers={this.props.publishers}
          handlePubChange={this.handlePubChange}
        />
        <input
          onChange={this.handleChange}
          value={this.state.searchVal}
          type="text"
        />
        <button onClick={this.handleClick}>Search</button>
      </>
    );
  }
}

export default SearchBar;
