import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';

import { buttonMedium, typographyTitleOnLight } from '../cssConstants';
import {
    selectMovieActionCreator,
    updateJustPickedActionCreator,
} from '../../state/actions/movieActions';


const style = {
    ...typographyTitleOnLight,
    background: buttonMedium,
    bottom: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '5%',
    position: 'fixed',
    textAlign: 'center',
    width: '90%',
};

class PickMovieButton extends React.Component {
    handlePickMovie = () => {
        const selectedMovie = _.sample(this.props.movies);
        // TODO: show error if no movies to choose from
        this.props.selectMovie(selectedMovie || {});

        if (selectedMovie) {
            // movies could be an empty array if watchlist has no movies
            localStorage.setItem('lastPickedTime', moment().format());
            this.props.updateJustPicked();
        }
    }

    render() {
        if (this.props.justPicked) {
            return null;
        }

        return (
            <div onClick={this.handlePickMovie} style={style}>
                wut to watch now?
            </div>
        );
    }
}

const mapStateToProps = state => ({
    justPicked: state.movies.justPicked,
})

const mapDispatchToProps = dispatch => ({
    selectMovie: selectedMovie => {
        dispatch(selectMovieActionCreator(selectedMovie));
    },
    updateJustPicked: () => {
        dispatch(updateJustPickedActionCreator());
    },
});

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(PickMovieButton);

export default ConnectedButton;
