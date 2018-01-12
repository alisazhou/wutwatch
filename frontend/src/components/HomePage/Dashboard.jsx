import React from 'react';
import { connect } from 'react-redux';

import requireAuth from '../requireAuth';
import EditWatchlists from '../EditWatchlists/EditWatchlists'
import Movies from '../Movies/Movies';
import Watchlists from '../Watchlists/Watchlists';
import { loadMoviesActionCreator } from '../../state/actions/movieActions';
import { loadWatchHistoriesActionCreator } from '../../state/actions/watchHistoryActions';
import { loadWatchlistsActionCreator } from '../../state/actions/watchlistActions';


class Dashboard extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.movies)) {
            this.props.loadMovies();
        }

        if (_.isEmpty(this.props.watchHistories)) {
            this.props.loadWatchHistories();
        }

        if (_.isEmpty(this.props.watchlists)) {
            this.props.loadWatchlists();
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
    movies: state.movies.movies,
    showingEditWatchlists: state.ui.showingEditWatchlists,
    watchHistories: state.watchHistories.watchHistories,
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    loadMovies: () => {
        dispatch(loadMoviesActionCreator());
    },
    loadWatchHistories: () => {
        dispatch(loadWatchHistoriesActionCreator());
    },
    loadWatchlists: () => {
        dispatch(loadWatchlistsActionCreator());
    },
});

const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default requireAuth(ConnectedDashboard);
