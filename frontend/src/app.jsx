import React from 'react';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './state/store';
import HomePage from './components/HomePage/HomePage';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <HomePage />
                </Router>
            </Provider>
        );
    }
}

export default App;
