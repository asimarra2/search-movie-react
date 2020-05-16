import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";

class App extends Component {
  state = { results: [], totalResults: 0 };

  _handleResults = (results, totalResults) => {
    this.setState({ results, totalResults });
  };

  _renderResults = () => {
    const { results } = this.state;

    return results.map((movie) => {
      return <p key={movie.imdbID}>{movie.Title}</p>;
    });
  };

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>

        {this.state.results.length === 0 ? (
          <p>No results found</p>
        ) : (
          this._renderResults()
        )}
      </div>
    );
  }
}

export default App;
