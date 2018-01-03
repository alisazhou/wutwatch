import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import {
    background800, buttonAccent,
    typographyBody2, typographySubtitle,
} from '../cssConstants';
import { createMovieActionCreator, clearSearchedMovieActionCreator } from '../../state/actions/movieActions';


const style = {
    marginTop: '30px',
};

const divStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
};

const yesStyle = {
    ...typographyBody2,
    background: buttonAccent,
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '5px 15px',
};

const noStyle = {
    ...yesStyle,
    background: background800,
};

const SearchedMovieConfirm = props => {
    const handleYesClick = () => {
        const movieInfo = _.omit(props.searchedMovie, 'found');
        movieInfo.watchlist = props.selectedWatchlist.id;
        props.createMovie(movieInfo);
        props.clearSearchedMovie();
    };

    return (
        <div style={style}>
            <div style={{...typographySubtitle}}>is this the movie?</div>
            <div style={divStyle}>
                <div onClick={handleYesClick} style={yesStyle}>
                    yes, add it to watchlist
                </div>
                <div style={noStyle}>no, let me add myself</div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    searchedMovie: state.movies.searchedMovie,
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    createMovie: movieInfo => {
        dispatch(createMovieActionCreator(movieInfo));
    },
    clearSearchedMovie: () => {
        dispatch(clearSearchedMovieActionCreator());
    },
});

const ConnectedConfirm = connect(mapStateToProps, mapDispatchToProps)(SearchedMovieConfirm);

export default ConnectedConfirm;
