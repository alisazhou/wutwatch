import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import Dashboard from '../Dashboard/Dashboard';


class HomePage extends React.Component {
    render() {
        return (
            <div>
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
