import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const requireAuth = ProtectedComponent => {
    const WrappedComponent = props => {
        if (props.isAuthenticated || localStorage.hasOwnProperty('token')) {
            return <ProtectedComponent />;
        }

        return <Redirect to="/login" />;
    }

    const mapStateToProps = state => ({
        isAuthenticated: state.auth && state.auth.isAuthenticated,
    });

    return connect(mapStateToProps)(WrappedComponent);
};

export default requireAuth;
