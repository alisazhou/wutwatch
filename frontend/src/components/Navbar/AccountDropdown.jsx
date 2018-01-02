import React from 'react';

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

const divStyle = {
    padding: '5px 0px 5px 10px',
};

const AccountDropdown = props =>
    <div style={style}>
        <div style={divStyle}><span style={{...typographyBody1OnLight}}>edit watchlists</span></div>
        <div style={divStyle}><span style={{...typographyBody1OnLight}}>log out</span></div>
    </div>


export default AccountDropdown;
