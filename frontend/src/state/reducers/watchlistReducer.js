import _ from 'lodash';

import {
    CREATE_WATCHLIST_FAILURE, CREATE_WATCHLIST_REQUEST, CREATE_WATCHLIST_SUCCESS,
    LOAD_WATCHLISTS_FAILURE, LOAD_WATCHLISTS_REQUEST, LOAD_WATCHLISTS_SUCCESS,
    ADD_WATCHER_FAILURE, ADD_WATCHER_REQUEST, ADD_WATCHER_SUCCESS,
    REMOVE_MOVIE_FAILURE, REMOVE_MOVIE_REQUEST, REMOVE_MOVIE_SUCCESS,
    SELECT_WATCHLIST,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    err: '',
    isFetching: false,
    watchlists: [],
    selectedWatchlist: 0,
};

const watchlistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_WATCHER_FAILURE:
        case CREATE_WATCHLIST_FAILURE:
        case LOAD_WATCHLISTS_FAILURE:
        case REMOVE_MOVIE_FAILURE:
            return { ...state, err: action.err, isFetching: false };
        case ADD_WATCHER_REQUEST:
        case CREATE_WATCHLIST_REQUEST:
        case LOAD_WATCHLISTS_REQUEST:
        case REMOVE_MOVIE_REQUEST:
            return { ...state, err: '', isFetching: true };
        case CREATE_WATCHLIST_SUCCESS:
            return {
                ...state,
                err: '',
                isFetching: false,
                watchlists: _.concat(state.watchlist, action.watchlist),
            };
        case LOAD_WATCHLISTS_SUCCESS:
            return { ...state, err: '', isFetching: false, watchlists: action.watchlists };
        case ADD_WATCHER_SUCCESS:
        case REMOVE_MOVIE_SUCCESS:
            return {
                ...state,
                err: '',
                isFetching: false,
                watchlists: _.concat(_.reject(state.watchlists, { id: action.watchlist.id }), action.watchlist),
            };
        case SELECT_WATCHLIST:
            return { ...state, selectedWatchlist: action.selectedWatchlist };
    }

    return state;
};

export default watchlistReducer;
