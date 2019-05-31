/* eslint-disable no-useless-constructor */
import React from 'react';

class StarWarsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.starwarsChars)

        return (
            <div>
                
            </div>  
        );
    }
}

export default StarWarsContainer;