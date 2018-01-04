import React from 'react';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import Navbar from '../Navbar/Navbar';
import { loadMoviesActionCreator } from '../../state/actions/movieActions';
import { loadWatchlistsActionCreator } from '../../state/actions/watchlistActions';


const style = {
    color: '#ffffff',
};

class HomePage extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.movies)) {
            this.props.loadMovies();
        }

        if (_.isEmpty(this.props.watchlists)) {
            this.props.loadWatchlists();
        }
    }

    render() {
        return (
            <div style={style}>
                <Navbar />
                <Dashboard />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    movies: state.movies.movies,
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    loadMovies: () => {
        dispatch(loadMoviesActionCreator());
    },
    loadWatchlists: () => {
        dispatch(loadWatchlistsActionCreator());
    },
});

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default ConnectedPage;
