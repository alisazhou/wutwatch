import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { loadWatchlistsActionCreator } from '../../state/actions/watchlistActions';
import AllWatchlistsDropdown from './AllWatchlistsDropdown';
import WatchlistBar from './WatchlistBar';


class Watchlists extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.watchlists)) {
            this.props.loadWatchlists();
        }
    }
    render() {
        return (
            <div>
                {_.isEmpty(this.props.searchedMovie) && <WatchlistBar />}
                {this.props.expandedWatchlists && <AllWatchlistsDropdown />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    expandedWatchlists: state.ui.expandedWatchlists,
    searchedMovie: state.movies.searchedMovie,
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    loadWatchlists: () => {
        dispatch(loadWatchlistsActionCreator());
    },
});

const ConnectedWatchlists = connect(mapStateToProps, mapDispatchToProps)(Watchlists);

export default ConnectedWatchlists;
