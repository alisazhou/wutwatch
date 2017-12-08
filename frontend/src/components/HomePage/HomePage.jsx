import React from 'react';

import CreateUserForm from './CreateUserForm';
import LoginUserForm from './LoginUserForm';


class HomePage extends React.Component {
    constructor(props) {
        super(...props);

        this.state = {
            showingLogin: true,
        };
    }

    handleTabClick = loginTabClicked => {
        this.setState({ showingLogin: loginTabClicked });
    };

    render() {
        return (
            <div>
                <div onClick={() => this.handleTabClick(true)}>Login</div>
                <div onClick={() => this.handleTabClick(false)}>Sign Up</div>
                {this.state.showingLogin ? <LoginUserForm /> : <CreateUserForm />}
            </div>
        );
    }
}

export default HomePage;
