import React from 'react';
import { Provider } from 'react-redux';

import store from './state/store';
import CreateUserForm from './components/HomePage/CreateUserForm';
import LoginUserForm from './components/HomePage/LoginUserForm';


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
