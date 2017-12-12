import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import { addWatcherActionCreator } from '../../state/actions/watchlistActions';


class AddWatcherForm extends React.Component {
    handleAddWatcher = watcherInfo => {
        this.props.addWatcher(this.props.selectedWatchlist, watcherInfo);
    }

    render() {
        if (!this.props.selectedWatchlist) {
            return null;
        }

        return (
            <form onSubmit={this.props.handleSubmit(this.handleAddWatcher)}>
                email: <Field component="input" type="text" name="watcher" />
                <button type="submit">Add Watcher to Watchlist</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    addWatcher: (selectedWatchlist, watcherInfo) => {
        dispatch(addWatcherActionCreator(selectedWatchlist, watcherInfo));
    },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(AddWatcherForm);

const WrappedForm = reduxForm({
    form: 'addWatcher',
    onSubmitSuccess: (result, dispatch) => { dispatch(reset('addWatcher')); },
})(ConnectedForm);


export default WrappedForm;
