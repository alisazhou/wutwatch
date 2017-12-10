import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import CreateUserForm from './CreateUserForm';
import LoginUserForm from './LoginUserForm';


class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Switch>
                    <Route exact path="/login" component={LoginUserForm} />
                    <Route exact path="/signup" component={CreateUserForm} />
                </Switch>
            </div>
        );
    }
}

export default HomePage;
