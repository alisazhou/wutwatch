import React from 'react';

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
                <AccountCircleIcon />
            </div>
        );
    }
}

export default Navbar;
