import React from 'react';
import { Provider } from 'react-redux';

import store from './state/store';
import CreateUserForm from './components/CreateUserForm';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CreateUserForm />
            </Provider>
        );
    }
}

export default App;
