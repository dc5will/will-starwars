import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 id='main-title'>Star Wars Search</h1>

        <main>
          <SearchForm />
        </main>
      </div>
    );
  }
}

export default App;
