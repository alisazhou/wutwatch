import {
    CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS,
    LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS,
} from './actionTypes';


const createUserFailureActionCreator = err => ({
    type: CREATE_USER_FAILURE,
    err,
});

const createUserRequestActionCreator = () => ({
    type: CREATE_USER_REQUEST,
});

const createUserSuccessActionCreator = () => ({
    type: CREATE_USER_SUCCESS,
});

const createUserAction = creds => {
    const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
    };

    return dispatch => {
        dispatch(createUserRequestActionCreator());

        return fetch(`http://${window.location.host}/api/profiles/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                dispatch(createUserSuccessActionCreator());
            }).catch(err => {
                console.log(err);
                dispatch(createUserFailureActionCreator(err));
            });
    };
}


const loginUserFailureActionCreator = err => ({
    type: LOGIN_USER_FAILURE,
    err,
});

const loginUserRequestActionCreator = () => ({
    type: LOGIN_USER_REQUEST,
});

const loginUserSuccessActionCreator = () => ({
    type: LOGIN_USER_SUCCESS,
});

const loginUserAction = creds => {
    const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
    };

    return dispatch => {
        dispatch(loginUserRequestActionCreator());

        return fetch(`http://${window.location.host}/api/authtoken/`, config)
            .then(response => response.ok ? response.json() : Promise.reject(response.text()))
            .then(json => {
                console.log(json);
                localStorage.setItem('token', json.token);
                dispatch(loginUserSuccessActionCreator());
            }).catch(err => {
                console.log(err);
                dispatch(loginUserFailureActionCreator(err));
            });
    };
}


export { createUserAction, loginUserAction };
