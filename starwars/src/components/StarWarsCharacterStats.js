import React from 'react';
import "./StarWars.css";

class StarWarsCharacterStats extends React.Component {

    render() {

        return(
            <div className="StarWarsCharacterStats">
                <h3>{this.props.data}</h3>
                <p>{this.props.dataHeading}</p>
            </div>
        )
    }
}

export default StarWarsCharacterStats;
