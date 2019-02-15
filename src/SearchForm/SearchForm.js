import React, { Component } from "react";
// import "./Searchbar.css";

export default class Searchbar extends Component {
  state = {
    input: "",
    results: []
  };

  // form submission handling for search input
  // user story: being able to access API to search for character name
  // access '/people/' endpoint
  handleSubmit = e => {
    e.preventDefault();
    console.log("handle submit ran");

    fetch(`https://swapi.co/api/people/?${this.state.input}`)
      .then(res => {
        if (!res.ok) {
          throw Error;
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          results: data.results
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
            placeholder="enter Star Wars character"
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
