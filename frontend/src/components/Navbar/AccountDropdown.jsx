import React from 'react';

import AccountDropdownItem from './AccountDropdownItem';
import { buttonLight, typographyBody1OnLight } from '../cssConstants';


const style = {
    background: buttonLight,
    cursor: 'pointer',
    position: 'absolute',
    right: '10px',
    top: '30px',
    width: '150px',
    zIndex: 1,
};

const itemStyle = {
    ...typographyBody1OnLight,
    padding: '5px 0px 5px 10px',
};

const AccountDropdown = props =>
    <div style={style}>
        <AccountDropdownItem style={itemStyle} content='edit watchlists' />
        <AccountDropdownItem style={itemStyle} content='log out' />
    </div>;

export default AccountDropdown;
