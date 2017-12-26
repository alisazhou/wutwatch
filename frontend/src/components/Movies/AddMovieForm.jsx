import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { createMovieActionCreator } from '../../state/actions/movieActions';


class AddMovieForm extends React.Component {
    handleCreateMovie = movieInfo => {
        movieInfo['watchlist'] = this.props.selectedWatchlist;
        this.props.createMovie(movieInfo);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleCreateMovie)}>
                name: <Field component="input" type="text" name="name" />
                poster url: <Field component="input" type="text" name="poster_url" />
                release date: <Field component="input" type="date" />
                <button type="submit">Add Movie to Watchlist</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    createMovie: movieInfo => {
        dispatch(createMovieActionCreator(movieInfo));
    },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(AddMovieForm);

const WrappedForm = reduxForm({
    form: 'addMovie',
    onSubmitSuccess: (result, dispatch) => { dispatch(reset('addMovie')); },
})(ConnectedForm);


export default WrappedForm;
