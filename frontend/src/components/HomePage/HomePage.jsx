import React from 'react';

import Dashboard from './Dashboard';


const style = {
    color: '#ffffff',
};

class HomePage extends React.Component {

    render() {
        return (
            <div style={style}>
                <Dashboard />
            </div>
        );
    }
};

export default HomePage;
