import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { loadMoviesActionCreator } from '../../state/actions/movieActions';
import AddMovieForm from './AddMovieForm';


class Movies extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.movies)) {
            this.props.loadMovies();
        }
    }
    get moviesList() {
        // if selected watchlist, show only movies in list; else show all movies
        const moviesInSelectedWatchlist = this.props.selectedWatchlist ?
            _.filter(this.props.movies, movie =>
                _.includes(movie.watchlists, this.props.selectedWatchlist)
            ) : this.props.movies;
        return (
            <ul>
                {_.map(moviesInSelectedWatchlist, movie => <li key={movie.id}>{movie.name}</li>)}
            </ul>
        );
    }
    render() {
        return (
            <div>
                <AddMovieForm />
                {this.moviesList}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    loadMovies: () => {
        dispatch(loadMoviesActionCreator());
    },
});

const ConnectedMovies = connect(mapStateToProps, mapDispatchToProps)(Movies);

export default ConnectedMovies;
