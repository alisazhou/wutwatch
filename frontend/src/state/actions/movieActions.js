import {
    CREATE_MOVIE_FAILURE, CREATE_MOVIE_REQUEST, CREATE_MOVIE_SUCCESS,
    LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS,
    CREATE_WATCHLIST_FAILURE, CREATE_WATCHLIST_REQUEST, CREATE_WATCHLIST_SUCCESS,
    LOAD_WATCHLISTS_FAILURE, LOAD_WATCHLISTS_REQUEST, LOAD_WATCHLISTS_SUCCESS,
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

const createMovieAction = info => {
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

const loadMoviesAction = () => {
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


const createWatchlistFailureActionCreator = err => ({
    type: CREATE_WATCHLIST_FAILURE,
    err,
});

const createWatchlistRequestActionCreator = () => ({
    type: CREATE_WATCHLIST_REQUEST,
});

const createWatchlistSuccessActionCreator = watchlist => ({
    type: CREATE_WATCHLIST_SUCCESS,
    watchlist,
});

const createWatchlistAction = info => {
    const config = {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(info),
    };

    return dispatch => {
        dispatch(createWatchlistRequestActionCreator());

        return fetch(`http://${window.location.host}/api/watchlists/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                dispatch(createWatchlistSuccessActionCreator(json));
            }).catch(err => {
                console.log(err);
                dispatch(createWatchlistFailureActionCreator(err));
            });
    };
};


const loadWatchlistsFailureActionCreator = err => ({
    type: LOAD_WATCHLISTS_FAILURE,
    err,
});

const loadWatchlistsRequestActionCreator = () => ({
    type: LOAD_WATCHLISTS_REQUEST,
});

const loadWatchlistsSuccessActionCreator = watchlists => ({
    type: LOAD_WATCHLISTS_SUCCESS,
    watchlists,
});

const loadWatchlistsAction = () => {
    const config = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
    };

    return dispatch => {
        dispatch(loadWatchlistsRequestActionCreator());

        return fetch(`http://${window.location.host}/api/watchlists/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                dispatch(loadWatchlistsSuccessActionCreator(json));
            }).catch(err => {
                console.log(err);
                dispatch(loadWatchlistsFailureActionCreator(err));
            });
    };
};


export { createMovieAction, loadMoviesAction, createWatchlistAction, loadWatchlistsAction };
