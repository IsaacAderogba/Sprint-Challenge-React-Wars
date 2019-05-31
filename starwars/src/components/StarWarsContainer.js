import React from "react";
import StarWarsCharacterSheet from "./StarWarsCharacterSheet";
import './StarWars.css';


class StarWarsContainer extends React.Component {
  render() {

    return (
      <ul className="StarWarsContainer">
        {this.props.starwarsChars.map(char => {
          return <StarWarsCharacterSheet key={char.name} starwarsChar={char}/>;
        })}
      </ul>
    );
  }
}

export default StarWarsContainer;
