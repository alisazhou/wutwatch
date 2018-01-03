import React from 'react';

import AddMovieForm from './AddMovieForm';
import MoviesListItem from './MoviesListItem';
import SearchedMovieBar from './SearchedMovieBar';
import SearchedMovieConfirm from './SearchedMovieConfirm';
import { typographySubtitle } from '../cssConstants';

const style = {
    textAlign: 'center',
};

const SearchedMovieResult = props => {
    if (props.movie.found) {
        return (
            <div style={style}>
                <SearchedMovieBar />
                <MoviesListItem {...props.movie} />
                <SearchedMovieConfirm />
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
