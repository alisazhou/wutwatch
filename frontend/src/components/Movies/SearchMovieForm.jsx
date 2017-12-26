import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { searchMovieActionCreator } from '../../state/actions/movieActions';


const SearchMovieForm = props => (
    <form onSubmit={props.handleSubmit(props.searchMovie)}>
        name: <Field component="input" type="text" name="movie_name" />
        <button type="submit">Search for Movie</button>
    </form>
);

const mapDispatchToProps = dispatch => ({
    searchMovie: movieName => {
        dispatch(searchMovieActionCreator(movieName));
    },
});

const ConnectedForm = connect(undefined, mapDispatchToProps)(SearchMovieForm);

const WrappedForm = reduxForm({
    form: 'searchMovie',
    onSubmitSuccess: (result, dispatch) => { dispatch(reset('searchMovie')); },
})(ConnectedForm);


export default WrappedForm;
