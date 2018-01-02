import React from 'react';
import _ from 'lodash';

import { buttonMedium } from '../cssConstants';
import withHover from '../withHover';


const AccountDropdownItem = props => {
    const finalStyle = _.clone(props.style);
    if (props.hovering) {
        finalStyle.background = buttonMedium;
    }

    return (
        <div style={finalStyle}>{props.content}</div>
    );
}

const WrappedItem = withHover(AccountDropdownItem);

export default WrappedItem;
