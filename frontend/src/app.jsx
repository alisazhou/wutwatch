import React from 'react';
import { Provider } from 'react-redux';

import store from './state/store';
import CreateUserForm from './components/CreateUserForm';
import LoginUserForm from './components/LoginUserForm';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <LoginUserForm />
            </Provider>
        );
    }
}

export default App;
