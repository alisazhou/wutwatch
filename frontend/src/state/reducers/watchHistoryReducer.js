import _ from 'lodash';

import {
    LOAD_WATCH_HISTORIES_FAILURE, LOAD_WATCH_HISTORIES_REQUEST, LOAD_WATCH_HISTORIES_SUCCESS,
    MARK_AS_WATCHED_FAILURE, MARK_AS_WATCHED_REQUEST, MARK_AS_WATCHED_SUCCESS,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    err: '',
    isFetching: false,
    watchHistories: [],
};

const watchHistoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_WATCH_HISTORIES_FAILURE:
        case MARK_AS_WATCHED_FAILURE:
            return { ...state, err: action.err, isFetching: false };
        case LOAD_WATCH_HISTORIES_REQUEST:
        case MARK_AS_WATCHED_REQUEST:
            return { ...state, err: '', isFetching: true };
        case LOAD_WATCH_HISTORIES_SUCCESS:
            return { ...state, err: '', isFetching: false, watchHistories: action.watchHistories };
        case MARK_AS_WATCHED_SUCCESS:
            return {
                ...state,
                err: '',
                isFetching: false,
                watchHistories: _.unionBy([action.newWatchHistory], state.watchHistories, 'id')
            };
    }

    return state;
};

export default watchHistoryReducer;
