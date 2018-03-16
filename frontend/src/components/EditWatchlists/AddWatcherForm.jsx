import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import StyledField from '../common/StyledField';
import {
    addWatcherActionCreator,
    selectWatchlistActionCreator,
} from '../../state/actions/watchlistActions';


const style = {
    margin: '20px',
};

const additionalInputStyle = {
    width: '60%',
};

class AddWatcherForm extends React.Component {
    handleAddWatcher = watcherInfo => {
        this.props.addWatcher(this.props.selectedWatchlist.id, watcherInfo)
            .then(updatedWatchlist => {
                this.props.selectWatchlist(updatedWatchlist);
            });
    };

    render() {
        if (!this.props.selectedWatchlist) {
            return null;
        }

        return (
            <form
                onSubmit={this.props.handleSubmit(this.handleAddWatcher)}
                style={style}
            >
                <StyledField
                    additionalStyle={additionalInputStyle}
                    name="watcher"
                    placeholder="new watcher's email address"
                />
                <button type="submit">Add to Watchlist</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    addWatcher: (selectedWatchlist, watcherInfo) => {
        return dispatch(addWatcherActionCreator(selectedWatchlist, watcherInfo));
    },
    selectWatchlist: watchlist => {
        dispatch(selectWatchlistActionCreator(watchlist));
    },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(AddWatcherForm);

const WrappedForm = reduxForm({
    form: 'addWatcher',
    onSubmitSuccess: (result, dispatch) => { dispatch(reset('addWatcher')); },
})(ConnectedForm);


export default WrappedForm;
