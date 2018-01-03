import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { loadMoviesActionCreator } from '../../state/actions/movieActions';
import AddMovieForm from './AddMovieForm';
import MoviesList from './MoviesList';
import PickMovieButton from './PickMovieButton';
import SearchMovieForm from './SearchMovieForm';
import SearchedMovieResult from './SearchedMovieResult';


class Movies extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.movies)) {
            this.props.loadMovies();
        }
    }

    get movies() {
        // if selected watchlist, show only movies in list; else show all movies
        if (_.isEmpty(this.props.selectedWatchlist)) {
            return this.props.movies;
        }

        return _.filter(this.props.movies, movie =>
            _.includes(movie.watchlists, this.props.selectedWatchlist.id)
        );
    }

    get searchedMovie() {
        if (_.isEmpty(this.props.searchedMovie)) {
            return null;
        }

        return (
            <div>
                {this.props.searchedMovie.name}<br />
                <img src={this.props.searchedMovie.poster_url} />
            </div>
        );
    }
    render() {
        const { searchedMovie, selectedWatchlist } = this.props;
        const onWatchlist = !_.isEmpty(selectedWatchlist) && _.isEmpty(searchedMovie);
        const onSearchResult = !_.isEmpty(searchedMovie);

        return (
            <div>
                {onWatchlist && <SearchMovieForm />}
                {onSearchResult ?
                    <SearchedMovieResult movie={searchedMovie} /> :
                    <MoviesList movies={this.movies} />
                }
                {onWatchlist && <PickMovieButton movies={this.movies} />}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    searchedMovie: state.movies.searchedMovie,
    selectedMovieName: state.movies.selectedMovie.name,
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    loadMovies: () => {
        dispatch(loadMoviesActionCreator());
    },
});

const ConnectedMovies = connect(mapStateToProps, mapDispatchToProps)(Movies);

export default ConnectedMovies;
