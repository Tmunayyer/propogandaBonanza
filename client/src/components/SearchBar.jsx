import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
  render() {
    return (
      <>
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
