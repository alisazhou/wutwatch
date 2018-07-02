import {
    ADDING_WATCHLIST,
    SHOW_EDIT_WATCHLISTS,
    SHOW_LOGIN_TAB,
    TOGGLE_ACCOUNT_DROPDOWN,
} from './actionTypes';


const addingWatchlistActionCreator = addingWatchlist => ({
    type: ADDING_WATCHLIST,
    addingWatchlist,
});

const showEditWatchlistsActionCreator = editing => ({
    type: SHOW_EDIT_WATCHLISTS,
    editing,
});

const showLoginTabActionCreator = clickedLoginTab => ({
    type: SHOW_LOGIN_TAB,
    clickedLoginTab,
});

const toggleAccountDropdownActionCreator = () => ({
    type: TOGGLE_ACCOUNT_DROPDOWN,
});



export {
    addingWatchlistActionCreator,
    showEditWatchlistsActionCreator,
    showLoginTabActionCreator,
    toggleAccountDropdownActionCreator,
};
