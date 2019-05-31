import React, { Component } from 'react';
import StarWarsContainer from './components/StarWarsContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsFilms: [],
      starwarsSpecies: [],
      starwarsStarships: [],
      starwarsVehicles: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.getFilms('https://swapi.co/api/films/');
    this.getSpecies('https://swapi.co/api/species/');
    this.getStarships('https://swapi.co/api/starships/');
    this.getVehicles('https://swapi.co/api/vehicles/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getFilms = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsFilms: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getSpecies = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsSpecies: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getStarships = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsStarships: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getVehicles = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsVehicles: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsContainer starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;