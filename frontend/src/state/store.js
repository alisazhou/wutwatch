import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import authReducer from './reducers/authReducers';


const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, logger)
);

export default store;
