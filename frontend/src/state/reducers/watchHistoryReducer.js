import {
    LOAD_WATCH_HISTORIES_FAILURE, LOAD_WATCH_HISTORIES_REQUEST, LOAD_WATCH_HISTORIES_SUCCESS,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    err: '',
    isFetching: false,
    watchHistories: [],
};

const watchHistoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_WATCH_HISTORIES_FAILURE:
            return { ...state, err: action.err, isFetching: false };
        case LOAD_WATCH_HISTORIES_REQUEST:
            return { ...state, err: '', isFetching: true };
        case LOAD_WATCH_HISTORIES_SUCCESS:
            return { ...state, err: '', isFetching: false, watchHistories: action.watchHistories };
    }

    return state;
};

export default watchHistoryReducer;
