import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createMovieAction, loadMoviesAction } from '../state/actions/movieActions';
import requireAuth from './requireAuth';


class Dashboard extends React.Component {
    componentWillMount() {
        this.props.loadMovies();
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.createMovie)}>
                name: <Field component="input" type="text" name="name" />
                <button type="submit">Add Movie</button>
            </form>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    createMovie: movieName => {
        dispatch(createMovieAction(movieName));
    },
    loadMovies: () => {
        dispatch(loadMoviesAction());
    },
});

const ConnectedDashboard = connect(undefined, mapDispatchToProps)(Dashboard);

const WrappedDashboard = reduxForm({
    form: 'createMovie',
})(ConnectedDashboard);

export default requireAuth(WrappedDashboard);
