import { SHOW_LOGIN_TAB, TOGGLE_WATCHLISTS } from './actionTypes';


const showLoginTabActionCreator = clickedLoginTab => ({
    type: SHOW_LOGIN_TAB,
    clickedLoginTab,
});

const toggleWatchlistsActionCreator = () => ({
    type: TOGGLE_WATCHLISTS,
});



export { showLoginTabActionCreator, toggleWatchlistsActionCreator };
