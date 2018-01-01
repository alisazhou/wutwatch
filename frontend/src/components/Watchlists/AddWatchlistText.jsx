import React from 'react';

import { typographyBody2Dim } from '../cssConstants';


const style = {
    ...typographyBody2Dim,
    display: 'inline-block',
    fontStyle: 'italic',
};

class AddWatchlistText extends React.Component {
    state = {
        hovering: false,
    };

    handleMouseEnter = () => {
        this.setState({ hovering: true });
    };

    handleMouseLeave = () => {
        this.setState({ hovering: false });
    };

    render() {
        return (
            <div
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={style}
            >
                add new list...
            </div>
        );
    }
}


export default AddWatchlistText;
