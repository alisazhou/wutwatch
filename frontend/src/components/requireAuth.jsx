import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './HomePage/LoginPage';
import { loginUserSuccessActionCreator } from '../state/actions/authActions';


const requireAuth = ProtectedComponent => {
    class WrappedComponent extends React.Component {
        componentWillMount() {
            if (localStorage.hasOwnProperty('token')) {
                this.props.markAsAuthenticated();
            }
        }

        render() {
            return this.props.isAuthenticated ? <ProtectedComponent /> : <LoginPage />;
        }
    }

    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated,
    });

    const mapDispatchToProps = dispatch => ({
        markAsAuthenticated: () => {
            dispatch(loginUserSuccessActionCreator());
        },
    });

    return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

export default requireAuth;
