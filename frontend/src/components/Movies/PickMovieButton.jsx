import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { selectMovieActionCreator } from '../../state/actions/movieActions';


class PickMovieButton extends React.Component {
    handlePickMovie = () => {
        const selectedMovie = _.sample(this.props.movies);
        this.props.selectMovie(selectedMovie);
    }

    render() {
        return (
            <button onClick={this.handlePickMovie}>
                Pick a movie for me!
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    selectMovie: selectedMovie => {
        dispatch(selectMovieActionCreator(selectedMovie));
    },
});

const ConnectedButton = connect(undefined, mapDispatchToProps)(PickMovieButton);

export default ConnectedButton;
