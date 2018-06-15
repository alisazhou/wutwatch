import ApolloClient from 'apollo-boost';  // TODO: see https://www.apollographql.com/docs/react/advanced/boost-migration.html
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import authReducer from './reducers/authReducer';
import movieReducer from './reducers/movieReducer';
import profileReducer from './reducers/profileReducer';
import uiReducer from './reducers/uiReducer';
import watchHistoryReducer from './reducers/watchHistoryReducer';
import watchlistReducer from './reducers/watchlistReducer';


const client = new ApolloClient({
    uri: '/graphql/',
    opts: {
        credentials: 'same-origin',
    },
});

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    movies: movieReducer,
    profiles: profileReducer,
    ui: uiReducer,
    watchHistories: watchHistoryReducer,
    watchlists: watchlistReducer,
});

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, logger)
);

export { store, client };
