import {
    ADDING_WATCHLIST,
    SHOW_EDIT_WATCHLISTS,
    SHOW_LOGIN_TAB,
    TOGGLE_ACCOUNT_DROPDOWN,
    TOGGLE_WATCHLISTS,
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

const toggleWatchlistsActionCreator = () => ({
    type: TOGGLE_WATCHLISTS,
});


export {
    addingWatchlistActionCreator,
    showEditWatchlistsActionCreator,
    showLoginTabActionCreator,
    toggleAccountDropdownActionCreator,
    toggleWatchlistsActionCreator,
};
