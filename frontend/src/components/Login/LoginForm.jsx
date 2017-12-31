import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { loginUserAction } from '../../state/actions/authActions';


const LoginForm = props =>
    <form onSubmit={props.handleSubmit(props.loginUser)}>
        email: <Field component='input' type='text' name='username' />
        password: <Field component='input' type='password' name='password' />
        <button type='submit'>submit</button>
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
