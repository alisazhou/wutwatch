import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { selectWatchlistActionCreator } from '../../state/actions/watchlistActions';


const SelectWatchlist = props => {
    const handleSelect = e => {
        const selectedWatchlistId = parseInt(e.target.value, 10);
        const selectedWatchlist = _.find(props.watchlists, { id: selectedWatchlistId });
        props.selectWatchlist(selectedWatchlist);
    }

    return (
        <select name="selectWatchlist" onChange={handleSelect}>
            <option value={0}>See all movies</option>
            {_.map(props.watchlists, watchlist =>
                <option key={watchlist.id} value={watchlist.id}>{watchlist.name}</option>
            )}
        </select>
    );
};

const mapStateToProps = state => ({
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    selectWatchlist: watchlistId => {
        dispatch(selectWatchlistActionCreator(watchlistId))
    },
});

const ConnectedSelect = connect(mapStateToProps, mapDispatchToProps)(SelectWatchlist);


export default ConnectedSelect;
