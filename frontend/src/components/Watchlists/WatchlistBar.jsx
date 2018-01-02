import React from 'react';

import CurrentWatchlistTitle from './CurrentWatchlistTitle';
import AddWatchlist from './AddWatchlist';
import { backgroundTitle } from '../cssConstants';


const style = {
    background: backgroundTitle,
    boxSizing: 'border-box',
    height: '45px',
    padding: '6px 20px 10px',
    width: '100%',
};

const WatchlistBar = props =>
    <div style={style}>
        <CurrentWatchlistTitle />
        <AddWatchlist />
    </div>;

export default WatchlistBar;
