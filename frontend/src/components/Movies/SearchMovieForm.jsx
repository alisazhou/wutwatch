import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { backgroundNormal, background600, typographyBody1 } from '../cssConstants';
import { searchMovieActionCreator } from '../../state/actions/movieActions';


const inputStyle = {
    ...typographyBody1,
    background: backgroundNormal,
    border: 'none',
    borderBottom: '1px dotted',
    borderBottomColor: background600,
    fontStyle: 'italic',
    margin: '15px 10%',
    outline: 'none',
    textAlign: 'center',
    width: '80%',
};

const SearchMovieForm = props =>
    <form onSubmit={props.handleSubmit(props.searchMovie)}>
        <Field
            component="input" type="text" name="movie_name"
            placeholder='add new movie'
            style={inputStyle}
        />
    </form>;

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
