import {
    LOAD_WATCH_HISTORIES_FAILURE, LOAD_WATCH_HISTORIES_REQUEST, LOAD_WATCH_HISTORIES_SUCCESS,
    MARK_AS_WATCHED_FAILURE, MARK_AS_WATCHED_REQUEST, MARK_AS_WATCHED_SUCCESS,
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


const markAsWatchedFailureActionCreator = err => ({
    type: MARK_AS_WATCHED_FAILURE,
    err,
});
const markAsWatchedRequestActionCreator = () => ({
    type: MARK_AS_WATCHED_REQUEST,
});
const markAsWatchedSuccessActionCreator = newWatchHistory => ({
    type: MARK_AS_WATCHED_SUCCESS,
    newWatchHistory,
});
const markAsWatchedActionCreator = historyId => {
    const config = {
        method: 'POST',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
    };

    return dispatch => {
        dispatch(markAsWatchedRequestActionCreator());
        const url = `http://${window.location.host}/api/watchhistories/${historyId}/mark-watched/`;

        return fetch(url, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                dispatch(markAsWatchedSuccessActionCreator(json));
            }).catch(err => {
                dispatch(markAsWatchedFailureActionCreator(err));
            });
    };
};

export { loadWatchHistoriesActionCreator, markAsWatchedActionCreator };
