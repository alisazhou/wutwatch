import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const reducers = combineReducers({});

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

export default store;
