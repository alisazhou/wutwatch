import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import LoginForm from '../Login/LoginForm';
import SignUpForm from '../Login/SignUpForm';


class LoginPage extends React.Component {
    state = {
        showLoginTab: true,
    };

    handleLoginTabClick = showLoginTab => {
        this.setState({ showLoginTab });
    }

    get tabs() {
        return (
            <div>
                <span onClick={() => this.handleLoginTabClick(true)}>I have an account</span>
                <span onClick={() => this.handleLoginTabClick(false)}>Sign Up</span>
            </div>
        );
    };

    render () {
        return (
            <div>
                {this.state.showLoginTab ? <LoginForm /> : <SignUpForm />}
                {this.tabs}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createUser: creds => {
        dispatch(createUserAction(creds));
    },
});

const ConnectedLoginPage = connect(undefined, mapDispatchToProps)(LoginPage);

const WrappedLoginPage = reduxForm({
    form: 'createNewUser'
})(ConnectedLoginPage);

export default WrappedLoginPage;
