import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { selectWatchlistActionCreator } from '../../state/actions/watchlistActions';
import { toggleWatchlistsActionCreator } from '../../state/actions/uiActions';


const AllWatchlistsDropdown = props => {
    if (!props.expandedWatchlists) {
        return null;
    }

    const handleClick = watchlist => {
        props.selectWatchlist(watchlist);
        props.toggleWatchlists();
    };

    return (
        <div>
            {_.map(props.watchlists, watchlist =>
                <div key={watchlist.id} onClick={() => handleClick(watchlist)}>{watchlist.name}</div>
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    expandedWatchlists: state.ui.expandedWatchlists,
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    selectWatchlist: watchlistId => {
        dispatch(selectWatchlistActionCreator(watchlistId));
    },
    toggleWatchlists: () => {
        dispatch(toggleWatchlistsActionCreator());
    },
});

const ConnectedDropdown = connect(mapStateToProps, mapDispatchToProps)(AllWatchlistsDropdown);


export default ConnectedDropdown;
