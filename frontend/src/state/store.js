import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import authReducer from './reducers/authReducer';
import movieReducer from './reducers/movieReducer';
import watchlistReducer from './reducers/watchlistReducer';


const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    movies: movieReducer,
    watchlists: watchlistReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, logger)
);

export default store;
