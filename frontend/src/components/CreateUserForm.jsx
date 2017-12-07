import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import createUser from '../state/actions/authActions';


class CreateUserForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.createUser)}>
                email: <Field component='input' type='text' name='email' />
                password: <Field component='input' type='password' name='password' />
                <button type='submit'>submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createUser: creds => {
        dispatch(createUser(creds));
    },
});

const ConnectedCreateUserForm = connect(undefined, mapDispatchToProps)(CreateUserForm);

const WrappedCreateUserForm = reduxForm({
    form: 'createNewUser'
})(ConnectedCreateUserForm);

export default WrappedCreateUserForm;
