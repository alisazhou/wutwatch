import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createMovieAction, loadMoviesAction } from '../../state/actions/movieActions';


class Movies extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.movies)) {
            this.props.loadMovies();
        }
    }
    get addMovieForm() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.createMovie)}>
                name: <Field component="input" type="text" name="name" />
                <button type="submit">Add Movie</button>
            </form>
        );
    }
    get moviesList() {
        return (
            <ul>
                {_.map(this.props.movies, movie => <li key={movie.id}>{movie.name}</li>)}
            </ul>
        );
    }
    render() {
        return (
            <div>
                {this.MoviesList}
                {this.addMovieForm}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
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
})(ConnectedMovies);

export default WrappedMovies;
