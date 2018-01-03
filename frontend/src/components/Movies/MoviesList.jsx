import React from 'react';

import MoviesListItem from './MoviesListItem';


const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
};

const MoviesList = props =>
    <div style={style}>
        {_.map(props.movies, movie => <MoviesListItem key={movie.id} {...movie} />)}
    </div>

export default MoviesList;
