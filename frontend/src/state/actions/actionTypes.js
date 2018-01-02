// auth reducer action types
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

// movie reducer action types
export const CREATE_MOVIE_FAILURE = 'CREATE_MOVIE_FAILURE';
export const CREATE_MOVIE_REQUEST = 'CREATE_MOVIE_REQUEST';
export const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS';

export const LOAD_MOVIES_FAILURE = 'LOAD_MOVIES_FAILURE';
export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';

export const REMOVE_MOVIES_FAILURE = 'REMOVE_MOVIES_FAILURE';
export const REMOVE_MOVIES_REQUEST = 'REMOVE_MOVIES_REQUEST';
export const REMOVE_MOVIES_SUCCESS = 'REMOVE_MOVIES_SUCCESS';

export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIES_FAILURE';
export const SEARCH_MOVIE_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIES_SUCCESS';

export const SELECT_MOVIE = 'SELECT_MOVIE';

// watchlist reducer action types
export const CREATE_WATCHLIST_FAILURE = 'CREATE_WATCHLIST_FAILURE';
export const CREATE_WATCHLIST_REQUEST = 'CREATE_WATCHLIST_REQUEST';
export const CREATE_WATCHLIST_SUCCESS = 'CREATE_WATCHLIST_SUCCESS';

export const LOAD_WATCHLISTS_FAILURE = 'LOAD_WATCHLISTS_FAILURE';
export const LOAD_WATCHLISTS_REQUEST = 'LOAD_WATCHLISTS_REQUEST';
export const LOAD_WATCHLISTS_SUCCESS = 'LOAD_WATCHLISTS_SUCCESS';

export const ADD_WATCHER_FAILURE = 'ADD_WATCHER_FAILURE';
export const ADD_WATCHER_REQUEST = 'ADD_WATCHER_REQUEST';
export const ADD_WATCHER_SUCCESS = 'ADD_WATCHER_SUCCESS';

export const SELECT_WATCHLIST = 'SELECT_WATCHLIST';

// UI reducer action types
export const ADDING_WATCHLIST = 'ADDING_WATCHLIST';  // entering new watchlist name
export const SHOW_LOGIN_TAB = 'SHOW_LOGIN_TAB';  // LoginPage
export const TOGGLE_ACCOUNT_DROPDOWN = 'TOGGLE_ACCOUNT_DROPDOWN';  // show account dropdown
export const TOGGLE_WATCHLISTS = 'TOGGLE_WATCHLISTS';  // show dropdown with all watchlists
