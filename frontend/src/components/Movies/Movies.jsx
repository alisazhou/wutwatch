import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { loadMoviesActionCreator } from '../../state/actions/movieActions';
import AddMovieForm from './AddMovieForm';
import PickMovieButton from './PickMovieButton';
import SearchMovieForm from './SearchMovieForm';


class Movies extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.movies)) {
            this.props.loadMovies();
        }
    }
    get movies() {
        // if selected watchlist, show only movies in list; else show all movies
        if (!this.props.selectedWatchlist) {
            return this.props.movies;
        }

        return _.filter(this.props.movies, movie =>
            _.includes(movie.watchlists, this.props.selectedWatchlist)
        );
    }
    get moviesList() {
        return (
            <ul>
                {_.map(this.movies, movie => <li key={movie.id}>{movie.name}</li>)}
            </ul>
        );
    }
    render() {
        return (
            <div>
                <PickMovieButton movies={this.movies} />{this.props.selectedMovie.name}
                {this.props.selectedWatchlist && <div>
                    <AddMovieForm />
                    <SearchMovieForm />
                </div>}
                {this.moviesList}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    selectedMovie: state.movies.selectedMovie,
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    loadMovies: () => {
        dispatch(loadMoviesActionCreator());
    },
});

const ConnectedMovies = connect(mapStateToProps, mapDispatchToProps)(Movies);

export default ConnectedMovies;
