import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import StyledField from '../common/StyledField';
import { createWatchlistActionCreator } from '../../state/actions/watchlistActions';
import { addingWatchlistActionCreator } from '../../state/actions/uiActions';


const additionalInputStyle = {
    position: 'relative',
    left: '215px',
    top: '4px',
};

const AddWatchlistForm = props => (
    <form onSubmit={props.handleSubmit(props.createWatchlist)}>
        <StyledField
            additionalStyle={additionalInputStyle}
            name="name"
            onBlur={props.hideAddWatchlistForm}
            placeholder="add new watchlist..."
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
