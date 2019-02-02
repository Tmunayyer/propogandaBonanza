import React from 'react';
import { Component } from 'react';

import PubDropdown from './PubDropdown.jsx';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPublisher: 'ABC News',
      searchVal: '',
      byPublisher: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePubChange = this.handlePubChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(event) {
    this.setState({
      searchVal: event.target.value
    });
  }
  handleClick(event) {
    if (this.state.byPublisher) {
      this.props.handleSearch(this.state.chosenPublisher, this.state.searchVal);
    } else {
      this.props.handleSearch(null, this.state.searchVal);
    }
    this.setState({
      searchVal: ''
    });
  }
  handlePubChange(event) {
    this.setState({
      chosenPublisher: event.target.value
    });
  }
  handleToggle(event) {
    this.setState({
      byPublisher: !this.state.byPublisher
    });
  }
  render() {
    return (
      <>
        <button onClick={this.handleToggle}>Filter by Publisher</button>
        <PubDropdown
          publishers={this.props.publishers}
          handlePubChange={this.handlePubChange}
          show={this.state.byPublisher}
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
