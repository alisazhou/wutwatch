import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';

import { buttonMedium, typographyTitleOnLight } from '../cssConstants';
import { selectMovieActionCreator } from '../../state/actions/movieActions';


const style = {
    ...typographyTitleOnLight,
    background: buttonMedium,
    bottom: '5px',
    border: 'none',
    borderRadius: '5px',
    marginLeft: '5%',
    position: 'fixed',
    textAlign: 'center',
    width: '90%',
};

class PickMovieButton extends React.Component {
    state = {
        lastPickedAt: moment(localStorage.getItem('lastPickedAt')),
    };

    handlePickMovie = () => {
        const selectedMovie = _.sample(this.props.movies);
        this.props.selectMovie(selectedMovie || {});

        if (selectedMovie) {
            // movies could be an empty array if watchlist has no movies
            localStorage.setItem('lastPickedAt', moment().format());
            this.setState({ lastPickedAt: moment(localStorage.getItem('lastPickedAt')) });
        }
    }

    render() {
        if (this.state.lastPickedAt.isAfter(moment().subtract(2, 'hours'))) {
            // TODO: change this to disabled button with prompt text
            return (<div>Please watch the movie first before picking another one</div>);
        }
        return (
            <div onClick={this.handlePickMovie} style={style}>
                wut to watch now?
            </div>
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
