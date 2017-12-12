import _ from 'lodash';

import {
    CREATE_WATCHLIST_FAILURE, CREATE_WATCHLIST_REQUEST, CREATE_WATCHLIST_SUCCESS,
    LOAD_WATCHLISTS_FAILURE, LOAD_WATCHLISTS_REQUEST, LOAD_WATCHLISTS_SUCCESS,
    SELECT_WATCHLIST,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    err: '',
    isFetching: false,
    watchlists: [],
    selectedWatchlist: undefined,
};

const watchlistReducer = (state = INITIAL_STATE, action) => {
     if (action.type === CREATE_WATCHLIST_FAILURE || action.type === LOAD_WATCHLISTS_FAILURE) {
        return {...state,
            err: action.err,
            isFetching: false,
        };
    } else if (action.type === CREATE_WATCHLIST_REQUEST || action.type === LOAD_WATCHLISTS_REQUEST) {
        return {...state,
            err: '',
            isFetching: true,
        };
    } else if (action.type === CREATE_WATCHLIST_SUCCESS) {
        return {...state,
            err: '',
            isFetching: false,
            watchlists: _.concat(state.watchlists, action.watchlist),
        };
    } else if (action.type === LOAD_WATCHLISTS_SUCCESS) {
        return {...state,
            err: '',
            isFetching: false,
            watchlists: action.watchlists,
        };
    } else if (action.type === SELECT_WATCHLIST) {
        return {...state,
            selectedWatchlist: action.selectedWatchlist,
        };
    }

    return state;
};

export default watchlistReducer;
