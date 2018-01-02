import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { backgroundTitle, background800, typographyBody2 } from '../cssConstants';
import { createWatchlistActionCreator } from '../../state/actions/watchlistActions';
import { addingWatchlistActionCreator } from '../../state/actions/uiActions';


const inputStyle = {
    ...typographyBody2,
    background: backgroundTitle,
    border: 'none',
    borderBottom: '1px dotted',
    borderBottomColor: background800,
    fontStyle: 'italic',
    outline: 'none',
    position: 'relative',
    left: '215px',
    top: '4px',
    width: 'fit-content',
};

const AddWatchlistForm = props => (
    <form onSubmit={props.handleSubmit(props.createWatchlist)}>
        <Field component="input" type="text" name="name"
            onBlur={props.hideAddWatchlistForm}
            placeholder='add new list...'
            style={inputStyle}
        />
    </form>
);

const mapDispatchToProps = dispatch => ({
    createWatchlist: watchlistInfo => {
        dispatch(createWatchlistActionCreator(watchlistInfo));
    },
    hideAddWatchlistForm: () => {
        dispatch(addingWatchlistActionCreator(false));
    },
});

const ConnectedForm = connect(undefined, mapDispatchToProps)(AddWatchlistForm);

const onSubmitSuccess = (result, dispatch) => {
    dispatch(addingWatchlistActionCreator(false));
    dispatch(reset('addWatchlist'));
};

const WrappedForm = reduxForm({
    form: 'addWatchlist',
    onSubmitSuccess,
    destroyOnUnmount: false,
})(ConnectedForm);


export default WrappedForm;
