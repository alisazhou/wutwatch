import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import {
    createWatchlistActionCreator, loadWatchlistsActionCreator, selectWatchlistActionCreator,
} from '../../state/actions/watchlistActions';


class Watchlists extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.watchlists)) {
            this.props.loadWatchlists();
        }
        this.props.selectWatchlist(_.head(this.props.watchlists));
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
                {_.map(this.props.watchlists, watchlist =>
                    <li
                        key={watchlist.id}
                        onClick={() => this.props.selectWatchlist(watchlist.id)}
                    >
                        {watchlist.name}
                    </li>
                )}
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
        dispatch(createWatchlistActionCreator(watchlistInfo));
    },
    loadWatchlists: () => {
        dispatch(loadWatchlistsActionCreator());
    },
    selectWatchlist: watchlistId => {
        dispatch(selectWatchlistActionCreator(watchlistId))
    },
});

const ConnectedWatchlists = connect(mapStateToProps, mapDispatchToProps)(Watchlists);

const WrappedWatchlists = reduxForm({
    form: 'createWatchlist',
    onSubmitSuccess: (result, dispatch) => { dispatch(reset('createWatchlist')); },
})(ConnectedWatchlists)

export default WrappedWatchlists;
