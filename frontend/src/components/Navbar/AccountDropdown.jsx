import React from 'react';
import { connect } from 'react-redux';

import AccountDropdownItem from './AccountDropdownItem';
import { buttonLight, typographyBody1OnLight } from '../cssConstants';
import {
    showEditWatchlistsActionCreator,
    toggleAccountDropdownActionCreator,
} from '../../state/actions/uiActions';


const style = {
    background: buttonLight,
    cursor: 'pointer',
    position: 'absolute',
    right: '10px',
    top: '30px',
    width: '150px',
    zIndex: 2,
};

const itemStyle = {
    ...typographyBody1OnLight,
    padding: '5px 0px 5px 10px',
};

class AccountDropdown extends React.Component {
    componentDidMount() {
        window.addEventListener('click', this.props.toggleAccountDropdown);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.props.toggleAccountDropdown);
    }

    render() {
        return (
            <div style={style}>
                <AccountDropdownItem
                    onClick={this.props.showEditWatchlists}
                    style={itemStyle}
                    content='edit watchlists'
                />
                <AccountDropdownItem style={itemStyle} content='log out' />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    showEditWatchlists: () => {
        dispatch(showEditWatchlistsActionCreator(true));
    },
    toggleAccountDropdown: () => {
        dispatch(toggleAccountDropdownActionCreator());
    },
});

const ConnectedDropdown = connect(undefined, mapDispatchToProps)(AccountDropdown);

export default ConnectedDropdown;
