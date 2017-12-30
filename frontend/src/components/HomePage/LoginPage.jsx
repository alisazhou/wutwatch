import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createUserAction, loginUserAction } from '../../state/actions/authActions';


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
        if (this.state.showLoginTab) {
            return (
                <div>
                    {this.tabs}
                    <form onSubmit={this.props.handleSubmit(this.props.loginUser)}>
                        email: <Field component='input' type='text' name='username' />
                        password: <Field component='input' type='password' name='password' />
                        <button type='submit'>submit</button>
                    </form>
                </div>
            );
        }
        return (
            <div>
                {this.tabs}
                <form onSubmit={this.props.handleSubmit(this.props.createUser)}>
                    first name: <Field component='input' type='text' name='first_name' />
                    last name: <Field component='input' type='text' name='last_name' />
                    email: <Field component='input' type='text' name='email' />
                    password: <Field component='input' type='password' name='password' />
                    <button type='submit'>submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth && state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
    createUser: creds => {
        dispatch(createUserAction(creds));
    },
    loginUser: creds => {
        dispatch(loginUserAction(creds));
    },
});

const ConnectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

const WrappedLoginPage = reduxForm({
    form: 'createNewUser'
})(ConnectedLoginPage);

export default WrappedLoginPage;
