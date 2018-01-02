import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';

import FieldGroup from './FieldGroup';
import { createUserAction } from '../../state/actions/authActions';


class SignUpForm extends React.Component {
    componentDidMount() {
        this.props.change('email', this.props.enteredEmail);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.createUser)} style={this.props.style}>
                <FieldGroup
                    label="email:"
                    fieldComponent="input"
                    fieldType="text"
                    fieldName="email"
                    passthruProps={{ autoFocus: true }}
                />
                <FieldGroup
                    label="password:"
                    fieldComponent="input"
                    fieldType="password"
                    fieldName="password"
                />
                <FieldGroup
                    label="first name:"
                    fieldComponent="input"
                    fieldType="text"
                    fieldName="first_name"
                />
                <FieldGroup
                    label="last name:"
                    fieldComponent="input"
                    fieldType="text"
                    fieldName="last_name"
                />
                <button type='submit' style={this.props.buttonStyle}>Sign Up</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    const loginUserSelector = formValueSelector('loginUser');
    const enteredEmail = loginUserSelector(state, 'username');

    return { enteredEmail };
};

const mapDispatchToProps = dispatch => ({
    createUser: creds => {
        dispatch(createUserAction(creds));
    },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

const WrappedForm = reduxForm({
    form: 'createUser',
    destroyOnUnmount: false,
})(ConnectedForm);

export default WrappedForm;
