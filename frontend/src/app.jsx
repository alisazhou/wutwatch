import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './state/store';
import HomePage from './components/HomePage/HomePage';


class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Router>
                        <HomePage />
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
