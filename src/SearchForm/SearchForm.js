import React, { Component } from "react";
import SearchApiService from "../services/search-api-service";
import "./SearchForm.css";

export default class SearchForm extends Component {
  state = {
    input: '',
    results: []
  };

  // form submission handling for search input
  // user story: being able to access API to search for character name
  // access '/people/' endpoint
  handleSubmit = e => {
    e.preventDefault();
    console.log("handle submit ran");

    SearchApiService.getPeople(`${this.state.input}`).then(res => {
      this.setState({
        results: res.results
      });
    });
  };

  // grab target value from input and change state with user input
  handleSearch = searchInput => {
    console.log(searchInput);
    this.setState({
      input: searchInput
    });
  };

  render() {
    return (
      <div className="search-main">
        <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
          <input
            className="search-input"
            type="text"
            placeholder="ex: Skywalker"
            required
            onChange={e => this.handleSearch(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <ul>
          {this.state.results.map((result, index) => {
            return (
              <li key={index}>
                <p>{result.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
