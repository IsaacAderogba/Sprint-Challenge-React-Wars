import React from "react";
import "./StarWars.css";
import StarWarsCharacterStats from './StarWarsCharacterStats'
import StarWarsCharacterLinks from './StarWarsCharacterLinks'

class StarWarsCharacterSheet extends React.Component {
  render() {
    const {
      name,
      birth_year,
      gender,
      hair_color,
      eye_color,
      films,
      height,
      homeworld,
      mass,
      skin_color,
      species,
      starships,
      vehicles
    } = this.props.starwarsChar;

    const getDetails =
      gender !== "n/a"
        ? ` and is a ${gender} with ${hair_color} hair and ${eye_color} eyes`
        : "";

    return (
      <li className="StarWarsCharacterSheet">
        <h2>{name}</h2>
        <p>
          {name} was born in the year {birth_year}
          {getDetails}.
        </p>
        <div className='CharacterStatsContainer'>
            <StarWarsCharacterStats data={height} dataHeading='Height' />
            <StarWarsCharacterStats data={`${mass} kg`} dataHeading='Mass' />
            <StarWarsCharacterStats data={skin_color} dataHeading='Skin Color' />
        </div>
        <div className='MoreInfoContainer'>
            <StarWarsCharacterLinks listTitle='Species' listOfLinks={species} listData={this.props.starwarsSpecies}/>
            <StarWarsCharacterLinks listTitle='Starships'/>
            <StarWarsCharacterLinks listTitle='Vehicles'/>
            <StarWarsCharacterLinks listTitle='Films'/>
        </div>
      </li>
    );
  }
}

export default StarWarsCharacterSheet;

// {this.props.starwarsChar.name}
// apiUrl="https://swapi.co/api/species"