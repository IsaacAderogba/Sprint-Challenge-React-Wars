import React from "react";
import StarWarsCharacterSheet from "./StarWarsCharacterSheet";

class StarWarsContainer extends React.Component {
  render() {

    return (
      <ul>
        {this.props.starwarsChars.map(char => {
          return <StarWarsCharacterSheet key={char.name} starwarsChar={char}/>;
        })}
      </ul>
    );
  }
}

export default StarWarsContainer;
