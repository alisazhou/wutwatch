import React from 'react';

import requireAuth from './requireAuth';


const Dashboard = () => <div>IT WORKS</div>;

export default requireAuth(Dashboard);
