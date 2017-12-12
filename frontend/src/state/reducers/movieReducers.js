import _ from 'lodash';

import {
    CREATE_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS,
    LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS,
    CREATE_WATCHLIST_FAILURE, CREATE_WATCHLIST_REQUEST, CREATE_WATCHLIST_SUCCESS,
    LOAD_WATCHLISTS_FAILURE, LOAD_WATCHLISTS_REQUEST, LOAD_WATCHLISTS_SUCCESS,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    err: '',
    isFetching: false,
    movies: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
    const failureActionTypes = [
        CREATE_MOVIE_FAILURE,
        LOAD_MOVIES_FAILURE,
        CREATE_WATCHLIST_FAILURE,
        LOAD_WATCHLISTS_FAILURE,
    ];
    const requestActionTypes = [
        CREATE_MOVIE_REQUEST,
        LOAD_MOVIES_REQUEST,
        CREATE_WATCHLIST_REQUEST,
        LOAD_WATCHLISTS_REQUEST,
    ];

    if (_.includes(failureActionTypes, action.type)) {
        return {...state,
            err: action.err,
            isFetching: false,
        };
    } else if (_.includes(requestActionTypes, action.type)) {
        return {...state,
            err: '',
            isFetching: true,
        };
    } else if (action.type === CREATE_MOVIE_SUCCESS ) {
        return {...state,
            err: '',
            isFetching: false,
            movies: _.concat(state.movies, action.movie),
        };
    } else if (action.type === LOAD_MOVIES_SUCCESS) {
        return {...state,
            err: '',
            isFetching: false,
            movies: action.movies,
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
    }

    return state;
};

export default movieReducer;
