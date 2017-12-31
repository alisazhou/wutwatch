import React from 'react';
import { connect } from 'react-redux';

import FormTabs from '../Login/FormTabs';
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

const LoginPage = props =>
    <div style={style}>
        {props.showingLoginTab ?
            <LoginForm buttonStyle={buttonStyle} /> : <SignUpForm buttonStyle={buttonStyle} />
        }
        <FormTabs />
    </div>;

const mapStateToProps = state => ({
    showingLoginTab: state.ui.showingLoginTab,
});

const ConnectedLoginPage = connect(mapStateToProps)(LoginPage);

export default ConnectedLoginPage;
