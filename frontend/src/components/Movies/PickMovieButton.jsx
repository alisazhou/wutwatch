import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';

import {
    backgroundTitle, buttonMedium,
    typographyTitle, typographyTitleOnLight,
} from '../cssConstants';
import {
    updateSelectedMovieActionCreator,
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

        localStorage.setItem('lastPickedTime', moment().format());
        localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));

        this.props.updateJustPicked();
        this.props.updateSelectedMovie();
    }

    render() {
        let onClick = this.handlePickMovie;
        let finalStyle = _.clone(style);
        let divText = 'wut to watch now?';

        if (_.isEmpty(this.props.movies)) {
            // if no movies to pick from
            onClick = _.noop;
            divText = 'no movies to pick from';
            _.assign(finalStyle, typographyTitle, { background: backgroundTitle, cursor: 'default' });
        }

        return (
            <div onClick={onClick} style={finalStyle}>
                {divText}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    justPicked: state.movies.justPicked,
})

const mapDispatchToProps = dispatch => ({
    updateSelectedMovie: () => {
        dispatch(updateSelectedMovieActionCreator());
    },
    updateJustPicked: () => {
        dispatch(updateJustPickedActionCreator());
    },
});

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(PickMovieButton);

export default ConnectedButton;
