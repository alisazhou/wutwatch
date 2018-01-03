import React from 'react';

import CurrentWatchlistTitle from './CurrentWatchlistTitle';
import AddWatchlistForm from './AddWatchlistForm';
import SubNavbar from '../SubNavbar';


const WatchlistBar = props =>
    <SubNavbar>
        <CurrentWatchlistTitle />
        <AddWatchlistForm />
    </SubNavbar>;

export default WatchlistBar;
