import {
    ADDING_WATCHLIST,
    SHOW_LOGIN_TAB,
    TOGGLE_WATCHLISTS,
} from '../actions/actionTypes';


const INITIAL_STATE = {
    addingWatchlist: false,
    showingLoginTab: true,
    expandedWatchlists: false,
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDING_WATCHLIST:
            return { ...state, addingWatchlist: action.addingWatchlist };
        case SHOW_LOGIN_TAB:
            return { ...state, showingLoginTab: action.clickedLoginTab };
        case TOGGLE_WATCHLISTS:
            return { ...state, expandedWatchlists: !state.expandedWatchlists };
    }

    return state;
};

export default uiReducer;
