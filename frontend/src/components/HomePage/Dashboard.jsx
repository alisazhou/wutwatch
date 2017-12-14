import React from 'react';

import requireAuth from '../requireAuth';
import Movies from '../Movies/Movies';
import Watchlists from '../Watchlists/Watchlists';


const Dashboard = props => (
    <div>
        <Watchlists />
        <Movies />
    </div>
);

export default requireAuth(Dashboard);
