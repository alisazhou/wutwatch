import {
    ADDING_WATCHLIST,
    SHOW_LOGIN_TAB,
    TOGGLE_WATCHLISTS,
} from './actionTypes';


const addingWatchlistActionCreator = addingWatchlist => ({
    type: ADDING_WATCHLIST,
    addingWatchlist,
});

const showLoginTabActionCreator = clickedLoginTab => ({
    type: SHOW_LOGIN_TAB,
    clickedLoginTab,
});

const toggleWatchlistsActionCreator = () => ({
    type: TOGGLE_WATCHLISTS,
});


export {
    addingWatchlistActionCreator,
    showLoginTabActionCreator,
    toggleWatchlistsActionCreator,
};
