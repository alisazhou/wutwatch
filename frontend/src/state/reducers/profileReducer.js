import {
    LOAD_PROFILES_FAILURE, LOAD_PROFILES_REQUEST, LOAD_PROFILES_SUCCESS,
} from '../actions/actionTypes';


const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PROFILES_FAILURE:
            return { ...state, err: action.err, isFetching: false };
        case LOAD_PROFILES_REQUEST:
            return { ...state, err: '', isFetching: true };
        case LOAD_PROFILES_SUCCESS:
            return { ...state, err: '', isFetching: false, profiles: action.profiles };
    }

    return state;
};

export default profileReducer;
