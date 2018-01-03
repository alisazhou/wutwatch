import React from 'react';
import { connect } from 'react-redux';

import AccountCircleIcon from './AccountCircleIcon';
import AccountDropdown from './AccountDropdown';
import { backgroundTitle, typographyTitle } from '../cssConstants';


const style = {
    background: backgroundTitle,
    padding: '2px 8px 0px 8px',
};

const anchorStyle = {
    textDecoration: 'none',
};

const Navbar = props =>
    <div style={style}>
        <a href='/' style={anchorStyle}>
            <span style={{...typographyTitle}}>w u t w a t c h</span>
        </a>
        {props.isAuthenticated && <AccountCircleIcon />}
        {props.expandedAccountDropdown && <AccountDropdown />}
    </div>;

const mapStateToProps = state => ({
    expandedAccountDropdown: state.ui.expandedAccountDropdown,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
