import React from 'react';

import MoviesListItem from './MoviesListItem';


const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0px 15px',
};

// TODO: odd number of movies, style need to align left

const MoviesList = props =>
    <div style={style}>
        {_.map(props.movies, movie => <MoviesListItem key={movie.id} {...movie} />)}
    </div>

export default MoviesList;
