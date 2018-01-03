import {
    CREATE_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS,
    LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS,
    SEARCH_MOVIE_FAILURE, SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS,
    CLEAR_SEARCHED_MOVIE, SELECT_MOVIE,
} from './actionTypes';


const HEADERS = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
};

const createMovieFailureActionCreator = err => ({
    type: CREATE_MOVIE_FAILURE,
    err,
});
const createMovieRequestActionCreator = () => ({
    type: CREATE_MOVIE_REQUEST,
});
const createMovieSuccessActionCreator = movie => ({
    type: CREATE_MOVIE_SUCCESS,
    movie,
});
const createMovieActionCreator = info => {
    const config = {
        method: 'POST',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(info),
    };

    return dispatch => {
        dispatch(createMovieRequestActionCreator());

        return fetch(`http://${window.location.host}/api/movies/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                dispatch(createMovieSuccessActionCreator(json));
            }).catch(err => {
                dispatch(createMovieFailureActionCreator(err));
            });
    };
};


const loadMoviesFailureActionCreator = err => ({
    type: LOAD_MOVIES_FAILURE,
    err,
});
const loadMoviesRequestActionCreator = () => ({
    type: LOAD_MOVIES_REQUEST,
});
const loadMoviesSuccessActionCreator = movies => ({
    type: LOAD_MOVIES_SUCCESS,
    movies,
});
const loadMoviesActionCreator = () => {
    const config = {
        method: 'GET',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
    };

    return dispatch => {
        dispatch(loadMoviesRequestActionCreator());

        return fetch(`http://${window.location.host}/api/movies/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                dispatch(loadMoviesSuccessActionCreator(json));
            }).catch(err => {
                dispatch(loadMoviesFailureActionCreator(err));
            });
    };
};


const searchMovieFailureActionCreator = err => ({
    type: SEARCH_MOVIE_FAILURE,
    err,
});
const searchMovieRequestActionCreator = () => ({
    type: SEARCH_MOVIE_REQUEST,
});
const searchMovieSuccessActionCreator = movie => ({
    type: SEARCH_MOVIE_SUCCESS,
    movie,
});
const searchMovieActionCreator = movieName => {
    const config = {
        method: 'POST',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(movieName),
    };

    return dispatch => {
        dispatch(searchMovieRequestActionCreator());

        return fetch(`http://${window.location.host}/api/search-movie/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                dispatch(searchMovieSuccessActionCreator(json));
            }).catch(err => {
                console.log(err);
                dispatch(searchMovieFailureActionCreator(err));
            });
    };
};


const clearSearchedMovieActionCreator = () => ({
    type: CLEAR_SEARCHED_MOVIE,
});


const selectMovieActionCreator = selectedMovie => ({
    type: SELECT_MOVIE,
    selectedMovie,
});

export {
    createMovieActionCreator,
    loadMoviesActionCreator,
    searchMovieActionCreator,
    clearSearchedMovieActionCreator,
    selectMovieActionCreator,
};
