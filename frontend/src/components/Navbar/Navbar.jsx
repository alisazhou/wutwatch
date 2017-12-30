import React from 'react';
import { connect } from 'react-redux';

import AccountCircleIcon from './AccountCircleIcon';
import { backgroundAccent, typographyTitle } from '../cssConstants';


const style = {...typographyTitle,
    background: backgroundAccent,
    padding: '2px 8px',
};

class Navbar extends React.Component {
    render() {
        return (
            <div style={style}>
                wutwatch
                {this.props.isAuthenticated && <AccountCircleIcon />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Navbar);
