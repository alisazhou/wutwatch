import {
    LOAD_WATCH_HISTORIES_FAILURE, LOAD_WATCH_HISTORIES_REQUEST, LOAD_WATCH_HISTORIES_SUCCESS,
} from './actionTypes';


const HEADERS = {
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};


const loadWatchHistoriesFailureActionCreator = err => ({
    type: LOAD_WATCH_HISTORIES_FAILURE,
    err,
});
const loadWatchHistoriesRequestActionCreator = () => ({
    type: LOAD_WATCH_HISTORIES_REQUEST,
});
const loadWatchHistoriesSuccessActionCreator = watchHistories => ({
    type: LOAD_WATCH_HISTORIES_SUCCESS,
    watchHistories,
});
const loadWatchHistoriesActionCreator = () => {
    const config = {
        method: 'GET',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
    };

    return dispatch => {
        dispatch(loadWatchHistoriesRequestActionCreator());

        return fetch(`http://${window.location.host}/api/watchhistories/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                dispatch(loadWatchHistoriesSuccessActionCreator(json));
            }).catch(err => {
                dispatch(loadWatchHistoriesFailureActionCreator(err));
            });
    };
};

export { loadWatchHistoriesActionCreator };
