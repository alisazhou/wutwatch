import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import FieldGroup from './FieldGroup';
import { loginUserAction } from '../../state/actions/authActions';


const LoginForm = props =>
    <form onSubmit={props.handleSubmit(props.loginUser)}>
        <FieldGroup label="email:" fieldComponent="input" fieldType="text" fieldName="username" />
        <FieldGroup label="password:" fieldComponent="input" fieldType="password" fieldName="password" />
        <button type='submit' style={props.buttonStyle}>Login</button>
    </form>;

const mapDispatchToProps = dispatch => ({
    loginUser: creds => {
        dispatch(loginUserAction(creds));
    },
});

const ConnectedForm = connect(undefined, mapDispatchToProps)(LoginForm);

const WrappedForm = reduxForm({
    form: 'loginUser'
})(ConnectedForm);

export default WrappedForm;
