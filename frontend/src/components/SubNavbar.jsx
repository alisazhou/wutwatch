import React from 'react';

import { backgroundTitle } from './cssConstants';


const style = {
    background: backgroundTitle,
    boxSizing: 'border-box',
    height: '45px',
    padding: '6px 20px 10px',
    width: '100%',
};

const SubNavbar = props =>
    <div style={style}>
        {props.children}
    </div>;

export default SubNavbar;
