import React from 'react';
import { connect } from 'react-redux';

import { buttonLight, textNormal } from '../cssConstants';
import IconWrapper from '../IconWrapper';
import { toggleAccountDropdownActionCreator } from '../../state/actions/uiActions';


const AccountCircleSvg = props => (
    <svg fill={props.fill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
);

const style = {
    float: 'right',
    marginTop: '2px',
};

const AccountCircleIcon = props => {
    const fill = props.expandedAccountDropdown ? buttonLight : textNormal;

    return (
        <IconWrapper onClick={props.toggleDropdown} style={style}>
            <AccountCircleSvg fill={fill} />
        </IconWrapper>
    );
};

const mapStateToProps = state => ({
    expandedAccountDropdown: state.ui.expandedAccountDropdown,
});

const mapDispatchToProps = dispatch => ({
    toggleDropdown: e => {
        e.stopPropagation();
        dispatch(toggleAccountDropdownActionCreator());
    },
});

const ConnectedIcon = connect(mapStateToProps, mapDispatchToProps)(AccountCircleIcon);

export default ConnectedIcon;
