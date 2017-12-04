import React from 'react';
import { Provider } from 'react-redux';

import store from './state/store';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>TELL ME IT DIDNT BREAK</div>
            </Provider>
        );
    }
}

export default App;
