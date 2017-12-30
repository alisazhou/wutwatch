import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';

import store from './state/store';
import HomePage from './components/HomePage/HomePage';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HomePage />
            </Provider>
        );
    }
}

export default App;
