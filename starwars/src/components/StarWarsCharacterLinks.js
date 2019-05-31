import React from "react";
import "./StarWars.css";

class StarWarsCharacterLinks extends React.Component {

  render() {
            
    return (
      <div className="StarWarsCharacterLinks">
        <h4>{this.props.listTitle}</h4>
        <ul />
      </div>
    );
  }
}

export default StarWarsCharacterLinks;
