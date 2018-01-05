import React from 'react';
import { connect } from 'react-redux';

import MoviesListItem from '../Movies/MoviesListItem';
import { typographySubtitle } from '../cssConstants';
import requireAuth from '../requireAuth';


const style = {
    marginTop: '30px',
    textAlign: 'center',
};

const divStyle = {
    ...typographySubtitle,
    lineHeight: '2em',
};

const SelectedMovie = props =>
    <div style={style}>
        <div style={divStyle}>you've just picked a movie</div>
        <div style={divStyle}>watch this first:</div>
        <MoviesListItem {...props.selectedMovie} />
    </div>;

const mapStateToProps = state => ({
    selectedMovie: state.movies.selectedMovie,
});

const ConnectedMovie = connect(mapStateToProps)(SelectedMovie);

export default requireAuth(ConnectedMovie);
