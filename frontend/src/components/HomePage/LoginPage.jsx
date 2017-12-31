import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../Login/LoginForm';
import SignUpForm from '../Login/SignUpForm';
import { backgroundLight, buttonNormal, typographyBody1 } from '../cssConstants';


const style = {
    ...typographyBody1,
    background: backgroundLight,
    borderRadius: '5px',
    margin: '20px 40px',
    padding: '20px 10px 0px 10px',
};

const buttonStyle = {
    background: buttonNormal,
    border: 'none',
    borderRadius: '5px',
    font: 'inherit',
    marginBottom: '10px',
    marginLeft: '5%',
    width: '90%',
};


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
                <span onClick={() => this.handleLoginTabClick(false)}>First time?</span>
            </div>
        );
    };

    render () {
        return (
            <div style={style}>
                {this.state.showLoginTab ? <LoginForm buttonStyle={buttonStyle} /> : <SignUpForm buttonStyle={buttonStyle} />}
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

export default ConnectedLoginPage;
