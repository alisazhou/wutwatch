import React from 'react';
import { connect } from 'react-redux';

import ToggleWatchlistArrowIcon from './ToggleWatchlistArrowIcon';


const CurrentWatchlistTitle = props =>
    <div>
        <div>{props.selectedWatchlist.name || 'all watchlists'}</div>
        <ToggleWatchlistArrowIcon />
    </div>;

const mapStateToProps = state => ({
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const ConnectedTitle = connect(mapStateToProps)(CurrentWatchlistTitle);

export default ConnectedTitle;
