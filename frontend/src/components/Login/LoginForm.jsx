import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';

import FieldGroup from './FieldGroup';
import { loginUserAction } from '../../state/actions/authActions';


class LoginForm extends React.Component {
    componentDidMount() {
        this.props.change('username', this.props.enteredUsername);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.loginUser)}>
                <FieldGroup
                    label="email:"
                    fieldComponent="input"
                    fieldType="text"
                    fieldName="username"
                    passthruProps={{ autoFocus: true }}
                />
                <FieldGroup
                    label="password:"
                    fieldComponent="input"
                    fieldType="password"
                    fieldName="password"
                />
                <button type='submit' style={this.props.buttonStyle}>Login</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    const createUserSelector = formValueSelector('createUser');
    const enteredUsername = createUserSelector(state, 'email');

    return { enteredUsername };
};

const mapDispatchToProps = dispatch => ({
    loginUser: creds => {
        dispatch(loginUserAction(creds));
    },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const WrappedForm = reduxForm({
    form: 'loginUser',
    destroyOnUnmount: false,
})(ConnectedForm);

export default WrappedForm;
