import _ from 'lodash';
import moment from 'moment';

import {
    CREATE_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS,
    LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS,
    SEARCH_MOVIE_FAILURE, SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS,
    CLEAR_SEARCHED_MOVIE, SELECT_MOVIE, UPDATE_JUST_PICKED,
} from '../actions/actionTypes';


const getJustPicked = () => {
    const lastPickedTime = localStorage.getItem('lastPickedTime');
    return !_.isNull(lastPickedTime) && moment(lastPickedTime).isAfter(moment().subtract(2, 'hours'));
}


const INITIAL_STATE = {
    err: '',
    isFetching: false,
    justPicked: getJustPicked(),
    movies: [],
    searchedMovie: {},
    selectedMovie: {},
};

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_MOVIE_FAILURE:
        case LOAD_MOVIES_FAILURE:
        case SEARCH_MOVIE_FAILURE:
            return { ...state, err: action.err, isFetching: false };
        case CREATE_MOVIE_REQUEST:
        case LOAD_MOVIES_REQUEST:
        case SEARCH_MOVIE_REQUEST:
            return { ...state, err: '', isFetching: true };
        case CREATE_MOVIE_SUCCESS:
            return {
                ...state,
                err: '',
                isFetching: false,
                movies: _.unionBy([action.movie], state.movies, 'id'),
            };
        case LOAD_MOVIES_SUCCESS:
            return { ...state, err: '', isFetching: false, movies: action.movies };
        case SEARCH_MOVIE_SUCCESS:
            return { ...state, err: '', isFetching: false, searchedMovie: action.movie };
        case CLEAR_SEARCHED_MOVIE:
            return { ...state, searchedMovie: {} };
        case UPDATE_JUST_PICKED:
            return { ...state, justPicked: getJustPicked() };
        case SELECT_MOVIE:
            return { ...state, selectedMovie: action.selectedMovie };
    }

    return state;
};

export default movieReducer;
