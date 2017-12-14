import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import {
    createWatchlistActionCreator,
    loadWatchlistsActionCreator,
    addWatcherActionCreator,
    selectWatchlistActionCreator,
} from '../../state/actions/watchlistActions';
import AddWatcherForm from './AddWatcherForm';
import AddWatchlistForm from './AddWatchlistForm';


class Watchlists extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.watchlists)) {
            this.props.loadWatchlists();
        }
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
                <AddWatchlistForm />
                <AddWatcherForm />
                {this.watchlistsList}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    loadWatchlists: () => {
        dispatch(loadWatchlistsActionCreator());
    },
    selectWatchlist: watchlistId => {
        dispatch(selectWatchlistActionCreator(watchlistId))
    },
});

const ConnectedWatchlists = connect(mapStateToProps, mapDispatchToProps)(Watchlists);

export default ConnectedWatchlists;
