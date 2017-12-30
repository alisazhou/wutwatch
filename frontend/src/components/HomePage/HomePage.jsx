import React from 'react';

import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Navbar from '../Navbar/Navbar';
import { loginUserSuccessActionCreator } from '../../state/actions/authActions';


const style = {
    color: '#ffffff',
};

class HomePage extends React.Component {
    render() {
        return (
            <div style={style}>
                <Navbar />
                <Dashboard />
            </div>
        );
    }
}

export default HomePage;
