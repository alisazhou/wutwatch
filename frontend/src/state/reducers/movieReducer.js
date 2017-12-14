import _ from 'lodash';

import {
    CREATE_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS,
    LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    err: '',
    isFetching: false,
    movies: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
    if (action.type === CREATE_MOVIE_FAILURE || action.type === LOAD_MOVIES_FAILURE) {
        return {...state,
            err: action.err,
            isFetching: false,
        };
    } else if (action.type === CREATE_MOVIE_REQUEST || action.type === LOAD_MOVIES_REQUEST) {
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
    }

    return state;
};

export default movieReducer;