import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import FieldGroup from './FieldGroup';
import { createUserAction } from '../../state/actions/authActions';


const SignUpForm = props =>
    <form onSubmit={props.handleSubmit(props.createUser)} style={props.style}>
        <FieldGroup label="first name:" fieldComponent="input" fieldType="text" fieldName="first_name" />
        <FieldGroup label="last name:" fieldComponent="input" fieldType="text" fieldName="last_name" />
        <FieldGroup label="email:" fieldComponent="input" fieldType="text" fieldName="email" />
        <FieldGroup label="password:" fieldComponent="input" fieldType="password" fieldName="password" />
        <button type='submit' style={props.buttonStyle}>Sign Up</button>
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
