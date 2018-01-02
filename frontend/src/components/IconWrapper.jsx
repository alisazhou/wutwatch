import React from 'react';

import { textNormal } from './cssConstants';


const IconWrapper = props => {
    const style = {
        cursor: 'pointer',
        display: 'inline-block',
        height: '24px',
        width: '24px',
        ...props.style,
    };

    return (
        <div onClick={props.onClick} style={style}>
            {props.children}
        </div>
    );
};

export default IconWrapper;
