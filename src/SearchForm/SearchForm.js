import React, { Component } from "react";
import SearchApiService from "../services/search-api-service";
import Helpers from "../services/helpers";
import "./SearchForm.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      results: [],
      searched: false
    };
  }

  // form submission handling for search input
  // user story: being able to access API to search for character name
  // access '/people/' endpoint
  handleSubmit = e => {
    e.preventDefault();
    SearchApiService.getPeople(`${this.state.input}`).then(res => {
      this.setState({
        results: res.results,
        searched: true
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

  displayResults() {
    if (this.state.results.length < 1 && this.state.searched) {
      return <p id="empty-result">No Results Found</p>;
    }
    return this.state.results.map((result, index) => (
      <div className="results-container">
        <ul>
          <li className="result-item" key={index}>
            <p>Name: {result.name}</p>
            <p>Gender: {result.gender}</p>
            <p>Height: {Helpers.convertCmToInches(result.height)}</p>
            <p>Weight: {Helpers.convertKgToLbs(result.mass)}</p>
            <p>Birthdate: {result.birth_year}</p>
          </li>
        </ul>
      </div>
    ));
  }

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

        {this.displayResults()}

      </div>
    );
  }
}
