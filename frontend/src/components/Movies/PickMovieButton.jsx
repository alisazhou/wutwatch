import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';

import { selectMovieActionCreator } from '../../state/actions/movieActions';


class PickMovieButton extends React.Component {
    handlePickMovie = () => {
        const selectedMovie = _.sample(this.props.movies);
        this.props.selectMovie(selectedMovie);
        localStorage.setItem('lastPicked', moment().format());
    }

    render() {
        const lastPicked = moment(localStorage.getItem('lastPicked'));
        if (lastPicked.isAfter(moment().subtract(2, 'hours'))) {
            return (<div>Please watch the movie first before picking another one</div>);
        }
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
