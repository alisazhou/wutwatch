import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import AddWatcherForm from './AddWatcherForm';
import BottomNavbar from './BottomNavbar';
import NoWatchlistSelected from './NoWatchlistSelected';


const EditWatchlists = props =>
    <div>
        {props.hasSelectedWatchlist ? <AddWatcherForm /> : <NoWatchlistSelected />}
        <BottomNavbar />
    </div>;

const mapStateToProps = state => ({
    hasSelectedWatchlist: !_.isEmpty(state.watchlists.selectedWatchlist),
});

const ConnectedWatchlists = connect(mapStateToProps)(EditWatchlists);


export default ConnectedWatchlists;
