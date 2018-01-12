import React from 'react';

import { typographySubtitle } from '../cssConstants';


const style = {
    ...typographySubtitle,
    marginTop: '30px',
    textAlign: 'center',
};

const NoWatchlistSelected = props =>
    <div style={style}>select a watchlist to edit</div>;


export default NoWatchlistSelected;
