import {
    CREATE_WATCHLIST_FAILURE, CREATE_WATCHLIST_REQUEST, CREATE_WATCHLIST_SUCCESS,
    LOAD_WATCHLISTS_FAILURE, LOAD_WATCHLISTS_REQUEST, LOAD_WATCHLISTS_SUCCESS,
    ADD_WATCHER_FAILURE, ADD_WATCHER_REQUEST, ADD_WATCHER_SUCCESS,
    REMOVE_MOVIE_FAILURE, REMOVE_MOVIE_REQUEST, REMOVE_MOVIE_SUCCESS,
    SELECT_WATCHLIST,
} from './actionTypes';


const HEADERS = {
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
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
const createWatchlistActionCreator = info => {
    const config = {
        method: 'POST',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
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
const loadWatchlistsActionCreator = () => {
    const config = {
        method: 'GET',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
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


const addWatcherFailureActionCreator = err => ({
    type: ADD_WATCHER_FAILURE,
    err,
});
const addWatcherRequestActionCreator = () => ({
    type: ADD_WATCHER_REQUEST,
});
const addWatcherSuccessActionCreator = watchlist => ({
    type: ADD_WATCHER_SUCCESS,
    watchlist,
});
const addWatcherActionCreator = (watchlistId, watcherInfo) => {
    const config = {
        method: 'PATCH',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(watcherInfo),
    };

    return dispatch => {
        dispatch(addWatcherRequestActionCreator());

        fetch(`http://${window.location.host}/api/watchlists/${watchlistId}/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                dispatch(addWatcherSuccessActionCreator(json));
            }).catch(err => {
                console.log(err);
                dispatch(addWatcherFailureActionCreator(err));
            });
    }
};


const removeMovieFailureActionCreator = err => ({
    type: REMOVE_MOVIE_FAILURE,
    err,
});
const removeMovieRequestActionCreator = () => ({
    type: REMOVE_MOVIE_REQUEST,
});
const removeMovieSuccessActionCreator = watchlist => ({
    type: REMOVE_MOVIE_SUCCESS,
    watchlist,
});
const removeMovieActionCreator = (movieId, watchlistId) => {
    const config = {
        method: 'POST',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ movie: movieId }),
    };

    return dispatch => {
        dispatch(removeMovieRequestActionCreator());

        fetch(`http://${window.location.host}/api/watchlists/${watchlistId}/remove-movie/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                dispatch(removeMovieSuccessActionCreator(json));
            }).catch(err => {
                console.log(err);
                dispatch(removeMovieFailureActionCreator(err));
            });
    }
}


const selectWatchlistActionCreator = selectedWatchlist => {
    if (!selectedWatchlist) {
        selectedWatchlist = {};
    }
    return {
        type: SELECT_WATCHLIST,
        selectedWatchlist,
    };
};


export {
    createWatchlistActionCreator,
    loadWatchlistsActionCreator,
    addWatcherActionCreator,
    removeMovieActionCreator,
    selectWatchlistActionCreator,
};
