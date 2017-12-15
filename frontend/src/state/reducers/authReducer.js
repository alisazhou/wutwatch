import {
    CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS,
    LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS,
} from '../actions/actionTypes';


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_USER_FAILURE:
        case LOGIN_USER_FAILURE:
            return { ...state, err: action.err, isAuthenticated: false, isFetching: false };
        case CREATE_USER_REQUEST:
        case LOGIN_USER_REQUEST:
            return { ...state, err: '', isAuthenticated: false, isFetching: true };
        case CREATE_USER_SUCCESS:
        case LOGIN_USER_SUCCESS:
            return { ...state, err: '', isAuthenticated: true, isFetching: false };
    }

    return state;
};

export default authReducer;
