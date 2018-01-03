import React from 'react';

import {
    background800, buttonAccent,
    typographyBody2, typographySubtitle,
} from '../cssConstants';


const style = {
    marginTop: '30px',
};

const divStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
};

const yesStyle = {
    ...typographyBody2,
    background: buttonAccent,
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '5px 15px',
};

const noStyle = {
    ...yesStyle,
    background: background800,
};

const SearchedMovieConfirm = props =>
    <div style={style}>
        <div style={{...typographySubtitle}}>is this the movie?</div>
        <div style={divStyle}>
            <div style={yesStyle}>yes, add it to watchlist</div>
            <div style={noStyle}>no, let me add myself</div>
        </div>
    </div>;

export default SearchedMovieConfirm;
