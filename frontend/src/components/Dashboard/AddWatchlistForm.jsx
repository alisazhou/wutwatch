import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { createWatchlistActionCreator } from '../../state/actions/watchlistActions';


const AddWatchlistForm = props => (
    <form onSubmit={props.handleSubmit(props.createWatchlist)}>
        name: <Field component="input" type="text" name="name" />
        <button type="submit">Add Watchlist</button>
    </form>
);

const mapDispatchToProps = dispatch => ({
    createWatchlist: watchlistInfo => {
        dispatch(createWatchlistActionCreator(watchlistInfo));
    },
});

const ConnectedForm = connect(undefined, mapDispatchToProps)(AddWatchlistForm);

const WrappedForm = reduxForm({
    form: 'addWatchlist',
    onSubmitSuccess: (result, dispatch) => { dispatch(reset('addWatchlist')); },
})(ConnectedForm);


export default WrappedForm;
