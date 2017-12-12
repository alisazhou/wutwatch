import {
    CREATE_WATCHLIST_FAILURE, CREATE_WATCHLIST_REQUEST, CREATE_WATCHLIST_SUCCESS,
    LOAD_WATCHLISTS_FAILURE, LOAD_WATCHLISTS_REQUEST, LOAD_WATCHLISTS_SUCCESS,
} from './actionTypes';


const HEADERS = {
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Authorization': `Token ${localStorage.getItem('token')}`,
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
        headers: HEADERS,
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

export { createWatchlistAction, loadWatchlistsAction };
