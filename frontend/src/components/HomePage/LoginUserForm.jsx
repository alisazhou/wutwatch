import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { loginUserAction } from '../../state/actions/authActions';


const LoginUserForm = props =>
    <form onSubmit={props.handleSubmit(props.loginUser)}>
        email: <Field component='input' type='text' name='username' />
        password: <Field component='input' type='password' name='password' />
        <button type='submit'>submit</button>
    </form>

const mapDispatchToProps = dispatch => ({
    loginUser: creds => {
        dispatch(loginUserAction(creds));
    },
});

const ConnectedLoginUserForm = connect(undefined, mapDispatchToProps)(LoginUserForm);

const WrappedLoginUserForm = reduxForm({
    form: 'createNewUser'
})(ConnectedLoginUserForm);

export default WrappedLoginUserForm;
