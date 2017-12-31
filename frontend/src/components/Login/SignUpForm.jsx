import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createUserAction } from '../../state/actions/authActions';


const SignUpForm = props =>
    <form onSubmit={props.handleSubmit(props.createUser)}>
        first name: <Field component='input' type='text' name='first_name' />
        last name: <Field component='input' type='text' name='last_name' />
        email: <Field component='input' type='text' name='email' />
        password: <Field component='input' type='password' name='password' />
        <button type='submit'>submit</button>
    </form>

const mapDispatchToProps = dispatch => ({
    createUser: creds => {
        dispatch(createUserAction(creds));
    },
});

const ConnectedForm = connect(undefined, mapDispatchToProps)(SignUpForm);

const WrappedForm = reduxForm({
    form: 'createUser'
})(ConnectedForm);

export default WrappedForm;
