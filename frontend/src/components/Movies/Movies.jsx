import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import AddMovieForm from './AddMovieForm';
import MoviesList from './MoviesList';
import PickMovieButton from './PickMovieButton';
import SearchMovieForm from './SearchMovieForm';
import SearchedMovieResult from './SearchedMovieResult';


const Movies = props => {
    // if viewing all watchlists, return all movies;
    // else filter movies for the currently viewing watchlist
    const filteredMovies = _.isEmpty(props.selectedWatchlist) ? props.movies :
        _.filter(props.movies, movie =>
            _.includes(movie.watchlists, props.selectedWatchlist.id)
        );

    const onWatchlistPage = !_.isEmpty(props.selectedWatchlist) && _.isEmpty(props.searchedMovie);
    const onSearchResultPage = !_.isEmpty(props.searchedMovie);

    return (
        <div>
            {onWatchlistPage && <SearchMovieForm />}
            {onSearchResultPage ?
                <SearchedMovieResult movie={searchedMovie} /> :
                <MoviesList movies={filteredMovies} />
            }
            {onWatchlistPage && <PickMovieButton movies={filteredMovies} />}
        </div>
    );
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    searchedMovie: state.movies.searchedMovie,
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const ConnectedMovies = connect(mapStateToProps)(Movies);

export default ConnectedMovies;
