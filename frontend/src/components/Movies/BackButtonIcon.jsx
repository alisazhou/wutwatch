import React from 'react';
import { connect } from 'react-redux';

import { typographyBody2 } from '../cssConstants';
import IconWrapper from '../IconWrapper';
import { clearSearchedMovieActionCreator } from '../../state/actions/movieActions';


const BackButtonSVG = () =>
    <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>


const style = {
    clear: 'both',
    float: 'left',
    marginLeft: '-15px',
};

const spanStyle = {
    ...typographyBody2,
    bottom: '6px',
    left: '5px',
    position: 'relative',
};

const BackButtonIcon = props =>
    <div style={style}>
        <IconWrapper onClick={props.clearSearchedMovie}>
            <BackButtonSVG />
        </IconWrapper>
        <span style={spanStyle}>back to watchlist</span>
    </div>;

const mapDispatchToProps = dispatch => ({
    clearSearchedMovie: () => {
        dispatch(clearSearchedMovieActionCreator());
    },
});

const ConnectedIcon = connect(undefined, mapDispatchToProps)(BackButtonIcon);

export default ConnectedIcon;
