import {
    LOAD_PROFILES_FAILURE, LOAD_PROFILES_REQUEST, LOAD_PROFILES_SUCCESS,
} from './actionTypes';


const HEADERS = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
};

const loadProfilesFailureActionCreator = err => ({
    type: LOAD_PROFILES_FAILURE,
    err,
});
const loadProfilesRequestActionCreator = () => ({
    type: LOAD_PROFILES_REQUEST,
});
const loadProfilesSuccessActionCreator = profiles => ({
    type: LOAD_PROFILES_SUCCESS,
    profiles,
});
const loadProfilesActionCreator = () => {
    const config = {
        method: 'GET',
        headers: {...HEADERS,
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
    };

    return dispatch => {
        dispatch(loadProfilesRequestActionCreator());

        return fetch(`http://${window.location.host}/api/profiles/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                dispatch(loadProfilesSuccessActionCreator(json));
            }).catch(err => {
                dispatch(loadProfilesFailureActionCreator(err));
            });
    };
};

export {
    loadProfilesActionCreator,
};
