import React from 'react';
import { connect } from 'react-redux';

import FormTabs from '../Login/FormTabs';
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../Login/SignUpForm';
import { background800, buttonNormal, typographyBody1, typographySubtitle } from '../cssConstants';


const style = {
    ...typographyBody1,
    background: background800,
    margin: '20px 40px',
    padding: '0px 10px',
};

const buttonStyle = {
    ...typographySubtitle,
    background: buttonNormal,
    border: 'none',
    borderRadius: '5px',
    height: '30px',
    marginBottom: '10px',
    marginLeft: '5%',
    width: '90%',
};

const LoginPage = props =>
    <div style={style}>
        <FormTabs />
        {props.showingLoginTab ?
            <LoginForm buttonStyle={buttonStyle} /> : <SignUpForm buttonStyle={buttonStyle} />
        }
    </div>;

const mapStateToProps = state => ({
    showingLoginTab: state.ui.showingLoginTab,
});

const ConnectedLoginPage = connect(mapStateToProps)(LoginPage);

export default ConnectedLoginPage;
