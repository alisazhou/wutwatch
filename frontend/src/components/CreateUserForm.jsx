import React from 'react';
import { Field, reduxForm } from 'redux-form';


class CreateUserForm extends React.Component {
    print = creds => {
        const config = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(creds),
        };
        const checkStatus = response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(response.statusText);
        }
        fetch(`http://${window.location.host}/api/profiles/`, config)
          .then(response => checkStatus(response))
          .then(response => {console.log(response)})
          .catch(err => {console.log('WRONG', err)})
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.print)}>
                email: <Field component='input' type='text' name='email' />
                password: <Field component='input' type='password' name='password' />
                <button type='submit'>submit</button>
            </form>
        );
    }
}

const WrappedCreateUserForm = reduxForm({
    form: 'createNewUser'
})(CreateUserForm);

export default WrappedCreateUserForm;
