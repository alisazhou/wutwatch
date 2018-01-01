import React from 'react';

import CurrentWatchlistTitle from './CurrentWatchlistTitle';
import AddWatchlist from './AddWatchlist';
import { backgroundTitle } from '../cssConstants';


const style = {
    background: backgroundTitle,
    height: '25px',
    padding: '6px 20px 10px',
    width: '100%',
};

const WatchlistBar = props =>
    <div style={style}>
        <CurrentWatchlistTitle />
        <AddWatchlist />
    </div>;

export default WatchlistBar;
