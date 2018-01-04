import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import AllWatchlistsDropdown from './AllWatchlistsDropdown';
import WatchlistBar from './WatchlistBar';


const Watchlists = props =>
    <div>
        {_.isEmpty(props.searchedMovie) && <WatchlistBar />}
        {props.expandedWatchlists && <AllWatchlistsDropdown />}
    </div>;

const mapStateToProps = state => ({
    expandedWatchlists: state.ui.expandedWatchlists,
    searchedMovie: state.movies.searchedMovie,
});

const ConnectedWatchlists = connect(mapStateToProps)(Watchlists);

export default ConnectedWatchlists;
