import React from 'react';
import './StarWars.css';


class StarWarsCharacterSheet extends React.Component {

    render() {
        return (
            <li className='StarWarsCharacterSheet'>{this.props.starwarsChar.name}</li>
        );
    }
}

export default StarWarsCharacterSheet;