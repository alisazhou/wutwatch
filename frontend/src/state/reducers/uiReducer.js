import {
    ADDING_WATCHLIST,
    SHOW_EDIT_WATCHLISTS,
    SHOW_LOGIN_TAB,
    TOGGLE_ACCOUNT_DROPDOWN,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    addingWatchlist: false,
    showingEditWatchlists: false,
    showingLoginTab: true,
    expandedAccountDropdown: false,
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDING_WATCHLIST:
            return { ...state, addingWatchlist: action.addingWatchlist };
        case SHOW_EDIT_WATCHLISTS:
            return { ...state, showingEditWatchlists: action.editing };
        case SHOW_LOGIN_TAB:
            return { ...state, showingLoginTab: action.clickedLoginTab };
        case TOGGLE_ACCOUNT_DROPDOWN:
            return { ...state, expandedAccountDropdown: !state.expandedAccountDropdown };
    }

    return state;
};

export default uiReducer;
