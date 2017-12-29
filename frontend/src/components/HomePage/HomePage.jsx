import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Navbar from '../Navbar/Navbar';


const style = {
    color: '#ffffff',
};

class HomePage extends React.Component {
    render() {

        return (
            <div style={style}>
                <Navbar />
                <Link to="/">Dashboard</Link>
                <Link to="/login">Login</Link>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </div>
        );
    }
}

export default HomePage;
