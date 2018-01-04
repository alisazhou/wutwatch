import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import authReducer from './reducers/authReducer';
import movieReducer from './reducers/movieReducer';
import uiReducer from './reducers/uiReducer';
import watchHistoryReducer from './reducers/watchHistoryReducer';
import watchlistReducer from './reducers/watchlistReducer';


const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    movies: movieReducer,
    ui: uiReducer,
    watchHistories: watchHistoryReducer,
    watchlists: watchlistReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, logger)
);

export default store;
