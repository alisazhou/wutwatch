import { SHOW_LOGIN_TAB } from './actionTypes';


const showLoginTabActionCreator = clickedLoginTab => ({
    type: SHOW_LOGIN_TAB,
    clickedLoginTab,
});


export { showLoginTabActionCreator };
