import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';


const reducers = combineReducers({
    form: formReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

export default store;
