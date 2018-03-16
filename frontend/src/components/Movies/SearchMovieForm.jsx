import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { typographyBody1 } from '../cssConstants';
import StyledField from '../common/StyledField';
import { searchMovieActionCreator } from '../../state/actions/movieActions';


const inputStyle = {
    ...typographyBody1,
    margin: '15px 10%',
    textAlign: 'center',
    width: '80%',
};

const SearchMovieForm = props =>
    <form onSubmit={props.handleSubmit(props.searchMovie)}>
        <StyledField
            additionalStyle={inputStyle}
            name="movie_name"
            placeholder='add new movie'
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
