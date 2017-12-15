import {
    CREATE_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS,
    LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS,
    SELECT_MOVIE,
} from './actionTypes';


const HEADERS = {
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Authorization': `Token ${localStorage.getItem('token')}`,
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
        headers: HEADERS,
        body: JSON.stringify(info),
    };

    return dispatch => {
        dispatch(createMovieRequestActionCreator());

        return fetch(`http://${window.location.host}/api/movies/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                dispatch(createMovieSuccessActionCreator(json));
            }).catch(err => {
                console.log(err);
                dispatch(createMovieFailureActionCreator(err));
            });
    };
}


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
        headers: HEADERS,
    };

    return dispatch => {
        dispatch(loadMoviesRequestActionCreator());

        return fetch(`http://${window.location.host}/api/movies/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                dispatch(loadMoviesSuccessActionCreator(json));
            }).catch(err => {
                console.log(err);
                dispatch(loadMoviesFailureActionCreator(err));
            });
    };
};


const selectMovieActionCreator = selectedMovie => ({
    type: SELECT_MOVIE,
    selectedMovie,
})

export { createMovieActionCreator, loadMoviesActionCreator, selectMovieActionCreator };
