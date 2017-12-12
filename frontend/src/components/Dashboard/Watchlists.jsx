import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createWatchlistAction, loadWatchlistsAction } from '../../state/actions/watchlistActions';


class Watchlists extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.watchlists)) {
            this.props.loadWatchlists();
        }
    }
    get addWatchlistForm() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.createWatchlist)}>
                name: <Field component="input" type="text" name="name" />
                <button type="submit">Add Watchlist</button>
            </form>
        );
    }
    get watchlistsList() {
        return (
            <ul>
                {_.map(this.props.watchlists, watchlist => <li key={watchlist.id}>{watchlist.name}</li>)}
            </ul>
        );
    }
    render() {
        return (
            <div>
                {this.watchlistsList}
                {this.addWatchlistForm}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    createWatchlist: watchlistInfo => {
        dispatch(createWatchlistAction(watchlistInfo));
    },
    loadWatchlists: () => {
        dispatch(loadWatchlistsAction());
    },
});

const ConnectedWatchlists = connect(mapStateToProps, mapDispatchToProps)(Watchlists);

const WrappedWatchlists = reduxForm({
    form: 'createWatchlist',
})(ConnectedWatchlists)

export default WrappedWatchlists;
