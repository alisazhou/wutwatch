import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import AddWatcherForm from './AddWatcherForm';
import BottomNavbar from './BottomNavbar';
import CurrentWatchersList from './CurrentWatchersList';
import NoWatchlistSelected from './NoWatchlistSelected';


const EditWatchlists = props => {
    if (!props.hasSelectedWatchlist) {
        return <NoWatchlistSelected />;
    }

    return <div>
        <AddWatcherForm />
        <CurrentWatchersList />
    </div>;
};

const mapStateToProps = state => ({
    hasSelectedWatchlist: !_.isEmpty(state.watchlists.selectedWatchlist),
});

const ConnectedEditWatchlists = connect(mapStateToProps)(EditWatchlists);


export default ConnectedEditWatchlists;
