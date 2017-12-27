import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { loadWatchlistsActionCreator } from '../../state/actions/watchlistActions';
import AddWatcherForm from './AddWatcherForm';
import AddWatchlistForm from './AddWatchlistForm';
import SelectWatchlist from './SelectWatchlist';


class Watchlists extends React.Component {
    componentWillMount() {
        if (_.isEmpty(this.props.watchlists)) {
            this.props.loadWatchlists();
        }
    }
    render() {
        return (
            <div>
                <AddWatchlistForm />
                <SelectWatchlist />
                <AddWatcherForm />
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
});

const ConnectedWatchlists = connect(mapStateToProps, mapDispatchToProps)(Watchlists);

export default ConnectedWatchlists;
