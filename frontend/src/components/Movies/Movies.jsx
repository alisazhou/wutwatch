import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { loadMoviesActionCreator } from '../../state/actions/movieActions';
import AddMovieForm from './AddMovieForm';
import PickMovieButton from './PickMovieButton';
import SearchMovieForm from './SearchMovieForm';
import MoviesList from './MoviesList';


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
        return (
            <div>
                {!_.isEmpty(this.props.selectedWatchlist) && <SearchMovieForm />}
                <MoviesList movies={this.movies} />
                {!_.isEmpty(this.props.selectedWatchlist) && <PickMovieButton movies={this.movies} />}
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
