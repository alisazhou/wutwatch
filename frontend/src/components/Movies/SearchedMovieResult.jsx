import React from 'react';

import AddMovieForm from './AddMovieForm';
import MoviesListItem from './MoviesListItem';


const SearchedMovieResult = props => {
    if (props.movie.found) {
        return (
            <div>
                <div>is this the movie?</div>
                <MoviesListItem {...props.movie} />
                <div>
                    <div>yes</div>
                    <div>no</div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>no movie found</div>
            <AddMovieForm />
        </div>
    );
};

export default SearchedMovieResult;
