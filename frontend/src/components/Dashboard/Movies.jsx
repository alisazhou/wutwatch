import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { createMovieAction, loadMoviesAction } from '../../state/actions/movieActions';


class Movies extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.movies)) {
            this.props.loadMovies();
        }
    }
    get addMovieForm() {
        if (!this.props.selectedWatchlist) {
            return null;
        }

        return (
            <form onSubmit={this.props.handleSubmit(this.handleCreateMovie)}>
                name: <Field component="input" type="text" name="name" />
                <button type="submit">Add Movie to Watchlist</button>
            </form>
        );
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
    handleCreateMovie = movieInfo => {
        movieInfo['watchlist'] = this.props.selectedWatchlist;
        this.props.createMovie(movieInfo);
    }
    render() {
        return (
            <div>
                {this.addMovieForm}
                {this.moviesList}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    selectedWatchlist: state.watchlists.selectedWatchlist,
})

const mapDispatchToProps = dispatch => ({
    createMovie: movieInfo => {
        dispatch(createMovieAction(movieInfo));
    },
    loadMovies: () => {
        dispatch(loadMoviesAction());
    },
});

const ConnectedMovies = connect(mapStateToProps, mapDispatchToProps)(Movies);

const WrappedMovies = reduxForm({
    form: 'createMovie',
    onSubmitSuccess: (result, dispatch) => { dispatch(reset('createMovie')); },
})(ConnectedMovies);

export default WrappedMovies;
