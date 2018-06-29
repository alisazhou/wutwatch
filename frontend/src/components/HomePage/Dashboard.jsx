import React from 'react';
import { connect } from 'react-redux';

import requireAuth from '../requireAuth';
import EditWatchlists from '../EditWatchlists/EditWatchlists'
import Movies from '../Movies/Movies';
import Watchlists from '../Watchlists/Watchlists';
import { loadMoviesActionCreator } from '../../state/actions/movieActions';
import { loadProfilesActionCreator } from '../../state/actions/profileActions';
import { loadWatchHistoriesActionCreator } from '../../state/actions/watchHistoryActions';
import { loadWatchlistsActionCreator } from '../../state/actions/watchlistActions';


class Dashboard extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.profiles)) {
            this.props.loadProfiles();
        }

        if (_.isEmpty(this.props.watchHistories)) {
            this.props.loadWatchHistories();
        }
    }

    render() {
        return (
            <div>
                <Watchlists />
                {this.props.showingEditWatchlists ? <EditWatchlists /> : <Movies />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profiles: state.profiles.profiles,
    showingEditWatchlists: state.ui.showingEditWatchlists,
    watchHistories: state.watchHistories.watchHistories,
});

const mapDispatchToProps = dispatch => ({
    loadProfiles: () => {
        dispatch(loadProfilesActionCreator());
    },
    loadWatchHistories: () => {
        dispatch(loadWatchHistoriesActionCreator());
    },
});

const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default requireAuth(ConnectedDashboard);
