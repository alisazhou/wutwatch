import React from 'react';

import MoviesListItem from './MoviesListItem';


const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0px 15px 45px 15px',
};

const MoviesList = props =>
    <div style={style}>
        {_.map(props.movies, movie => <MoviesListItem key={movie.node.id} {...movie.node} />)}
    </div>;

export default MoviesList;
