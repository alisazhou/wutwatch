import { SHOW_LOGIN_TAB } from '../actions/actionTypes';


const INITIAL_STATE = {
    showingLoginTab: true,
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_LOGIN_TAB:
            return { ...state, showingLoginTab: action.clickedLoginTab };
    }

    return state;
};

export default uiReducer;
