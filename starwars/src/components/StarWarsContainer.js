import React from "react";
import StarWarsCharacterSheet from "./StarWarsCharacterSheet";
import "./StarWars.css";

class StarWarsContainer extends React.Component {
  render() {

    const speciesNames = [];
    this.props.starwarsSpecies.forEach(species => {
        let nameOfSpecies = species.name;
        speciesNames.push(nameOfSpecies)
    })

    const filmNames = [];
    this.props.starwarsFilms.forEach(film => {
        let nameOfFilm = film.title;
        filmNames.push(nameOfFilm)
    })

    const starshipNames = [];
    this.props.starwarsStarships.forEach(starship => {
        let nameOfStarship = starship.name;
        starshipNames.push(nameOfStarship)
    })

    const vehicleNames = [];
    this.props.starwarsVehicles.forEach(vehicle => {
        let nameOfVehicle = vehicle.name;
        vehicleNames.push(nameOfVehicle)
    })

    return (
      <ul className="StarWarsContainer">
        {this.props.starwarsChars.map(char => {
          return (
            <StarWarsCharacterSheet
              key={char.name}
              starwarsChar={char}
              starwarsFilms={this.props.starwarsFilms}
              starwarsSpecies={this.props.starwarsSpecies}
              starwarsStarships={this.props.starwarsStarships}
              starwarsVehicles={this.props.starwarsVehicles}
            />
          );
        })}
      </ul>
    );
  }
}

export default StarWarsContainer;
