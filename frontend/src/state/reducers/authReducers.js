import {
    CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS,
    LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS,
} from '../actions/actionTypes';


const authReducer = (state = {}, action) => {
    if (action.type == CREATE_USER_FAILURE || action.type == LOGIN_USER_FAILURE) {
        return {...state,
            err: action.err,
            isFetching: false,
        };
    } else if (action.type == CREATE_USER_REQUEST || action.type == LOGIN_USER_REQUEST) {
        return {...state,
            err: '',
            isFetching: true,
        };
    } else if (action.type == CREATE_USER_SUCCESS || action.type == LOGIN_USER_SUCCESS) {
        return {...state,
            err: '',
            isFetching: false,
        };
    }

    return state;
};

export default authReducer;
