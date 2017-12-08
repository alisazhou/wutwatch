import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { loginUserAction } from '../state/actions/authActions';


class CreateUserForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.loginUser)}>
                email: <Field component='input' type='text' name='username' />
                password: <Field component='input' type='password' name='password' />
                <button type='submit'>submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: creds => {
        dispatch(loginUserAction(creds));
    },
});

const ConnectedCreateUserForm = connect(undefined, mapDispatchToProps)(CreateUserForm);

const WrappedCreateUserForm = reduxForm({
    form: 'createNewUser'
})(ConnectedCreateUserForm);

export default WrappedCreateUserForm;
