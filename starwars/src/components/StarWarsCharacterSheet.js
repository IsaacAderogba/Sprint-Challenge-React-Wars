import React from 'react';

class StarWarsCharacterSheet extends React.Component {

    render() {
        return (
            <li>{this.props.starwarsChar.name}</li>
        );
    }
}

export default StarWarsCharacterSheet;