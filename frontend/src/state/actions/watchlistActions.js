import {
    CREATE_WATCHLIST_FAILURE, CREATE_WATCHLIST_REQUEST, CREATE_WATCHLIST_SUCCESS,
    LOAD_WATCHLISTS_FAILURE, LOAD_WATCHLISTS_REQUEST, LOAD_WATCHLISTS_SUCCESS,
    ADD_WATCHER_FAILURE, ADD_WATCHER_REQUEST, ADD_WATCHER_SUCCESS,
    SELECT_WATCHLIST,
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

const createWatchlistActionCreator = info => {
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

const loadWatchlistsActionCreator = () => {
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
        headers: HEADERS,
        body: JSON.stringify(watcherInfo),
    };

    return dispatch => {
        if (!watchlistId) {
            dispatch(addWatcherFailureActionCreator('Need to specify a watchlist.'));
        }

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


const selectWatchlistActionCreator = selectedWatchlist => ({
    type: SELECT_WATCHLIST,
    selectedWatchlist,
});


export {
    createWatchlistActionCreator,
    loadWatchlistsActionCreator,
    addWatcherActionCreator,
    selectWatchlistActionCreator,
};
