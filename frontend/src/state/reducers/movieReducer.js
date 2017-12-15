import _ from 'lodash';

import {
    CREATE_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS,
    LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS,
    SELECT_MOVIE,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    err: '',
    isFetching: false,
    movies: [],
    selectedMovie: {},
};

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_MOVIE_FAILURE:
        case LOAD_MOVIES_FAILURE:
            return { ...state, err: action.err, isFetching: false };
        case CREATE_MOVIE_REQUEST:
        case LOAD_MOVIES_REQUEST:
            return { ...state, err: '', isFetching: true };
        case CREATE_MOVIE_SUCCESS:
            return {
                ...state,
                err: '',
                isFetching: false,
                movies: _.concat(state.movies, action.movie),
            };
        case LOAD_MOVIES_SUCCESS:
            return { ...state, err: '', isFetching: false, movies: action.movies };
        case SELECT_MOVIE:
            return { ...state, selectedMovie: action.selectedMovie };
    }

    return state;
};

export default movieReducer;
