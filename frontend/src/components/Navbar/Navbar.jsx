import React from 'react';
import { connect } from 'react-redux';

import AccountCircleIcon from './AccountCircleIcon';
import AccountDropdown from './AccountDropdown';
import { backgroundTitle, typographyTitle } from '../cssConstants';


const style = {
    background: backgroundTitle,
    padding: '2px 8px 0px 8px',
};

// TODO: make this a function
class Navbar extends React.Component {
    render() {
        return (
            <div style={style}>
                <span style={{...typographyTitle}}>w u t w a t c h</span>
                {this.props.isAuthenticated && <AccountCircleIcon />}
                {this.props.expandedAccountDropdown && <AccountDropdown />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    expandedAccountDropdown: state.ui.expandedAccountDropdown,
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Navbar);
