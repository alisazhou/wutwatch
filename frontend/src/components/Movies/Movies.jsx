import React from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';

import AddMovieForm from './AddMovieForm';
import MoviesList from './MoviesList';
import PickMovieButton from './PickMovieButton';
import SearchMovieForm from './SearchMovieForm';
import SearchedMovieResult from './SearchedMovieResult';


const LOAD_MOVIES = gql`{
    allMovies {
        edges {
            node {
                id
                moviedbId
                name
                posterUrl
                releaseDate
                watchlists {
                    edges {
                        node {
                            id
                        }
                    }
                }
            }
        }
    }
}`;


const Movies = props => {
    // if viewing all watchlists, return all movies;
    // else filter movies for the currently viewing watchlist, with watch history
    let filteredMovies = _.cloneDeep(props.movies.edges);
    if (!_.isEmpty(props.selectedWatchlist)) {
        // TODO: link local state to get selectedWatchlist.movies instead
        filteredMovies = _.filter(filteredMovies, movie =>
            _.includes(movie.node.watchlists, props.selectedWatchlist.id)
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
    // TODO: update this as well
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
    searchedMovie: state.movies.searchedMovie,
    selectedWatchlist: state.watchlists.selectedWatchlist,
    watchHistories: state.watchHistories.watchHistories,
});

const ConnectedMovies = connect(mapStateToProps)(Movies);


const QueriedMovies = () =>
    <Query query={LOAD_MOVIES}>
        {({ data, error, loading }) => {
            if (!error && !loading) {
                return <ConnectedMovies movies={data.allMovies} />;
            }

            return null;
        }}
    </Query>;

export default QueriedMovies;
