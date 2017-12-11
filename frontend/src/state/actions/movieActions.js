import {
    CREATE_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS,
    LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS,
} from './actionTypes';


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

const createMovieAction = info => {
    const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
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

const loadMoviesAction = () => {
    const config = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
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
}


export { createMovieAction, loadMoviesAction };
