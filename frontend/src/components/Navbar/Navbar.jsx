import React from 'react';
import { connect } from 'react-redux';

import AccountCircleIcon from './AccountCircleIcon';
import { backgroundTitle, typographyTitle } from '../cssConstants';


const style = {...typographyTitle,
    background: backgroundTitle,
    padding: '2px 8px 0px 8px',
};

class Navbar extends React.Component {
    render() {
        return (
            <div style={style}>
                w u t w a t c h
                {this.props.isAuthenticated && <AccountCircleIcon />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Navbar);
