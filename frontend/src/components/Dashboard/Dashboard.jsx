import React from 'react';

import requireAuth from '../requireAuth';
import Movies from './Movies';
import Watchlists from './Watchlists';


const Dashboard = props => (
    <div>
        <Watchlists />
        <Movies />
    </div>
);

export default requireAuth(Dashboard);
