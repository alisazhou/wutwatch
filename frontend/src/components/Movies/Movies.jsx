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
    // else filter movies for the currently viewing watchlist, with watch history
    let filteredMovies = _.cloneDeep(props.movies);
    if (!_.isEmpty(props.selectedWatchlist)) {
        filteredMovies = _.filter(filteredMovies, movie =>
            _.includes(movie.watchlists, props.selectedWatchlist.id)
        );

        // mark watched movies as such to be grayed out in selected watchlist
        const currentWatchlistHistory = _.filter(
            props.watchHistories,
            { watchlist: props.selectedWatchlist.id }
        );
        _.map(filteredMovies, movie => {
            const movieHistory = _.find(currentWatchlistHistory, { movie: movie.id });
            // newly created movies do not have watch histories
            movie.watched = !_.isUndefined(movieHistory) && !_.isNull(movieHistory.date_watched);
        })
    }

    // only pick from unwatched movies
    const unwatchedMovies = _.filter(filteredMovies, { watched: false });

    const onWatchlistPage = !_.isEmpty(props.selectedWatchlist) && _.isEmpty(props.searchedMovie);
    const onSearchResultPage = !_.isEmpty(props.searchedMovie);

    return (
        <div>
            {onWatchlistPage && <SearchMovieForm />}
            {onSearchResultPage ?
                <SearchedMovieResult movie={props.searchedMovie} /> :
                <MoviesList movies={filteredMovies} />
            }
            {onWatchlistPage && <PickMovieButton movies={unwatchedMovies} />}
        </div>
    );
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    searchedMovie: state.movies.searchedMovie,
    selectedWatchlist: state.watchlists.selectedWatchlist,
    watchHistories: state.watchHistories.watchHistories,
});

const ConnectedMovies = connect(mapStateToProps)(Movies);

export default ConnectedMovies;
