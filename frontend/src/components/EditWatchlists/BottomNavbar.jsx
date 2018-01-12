import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { textConfirm, textDim, typographyBody1 } from '../cssConstants';
import IconWrapper from '../IconWrapper';
import { showEditWatchlistsActionCreator } from '../../state/actions/uiActions';


const BackArrowSVG = () =>
    <svg fill={textDim} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>;

const BackArrowIcon = () =>
    <IconWrapper>
        <BackArrowSVG />
    </IconWrapper>;

const CheckMarkSVG = () =>
    <svg fill={textConfirm} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>;

const CheckMarkIcon = () =>
    <IconWrapper>
        <CheckMarkSVG />
    </IconWrapper>;


const style = {
    ...typographyBody1,
    bottom: '5px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '1%',
    position: 'fixed',
    width: '98%',
};

const leftSpanStyle = {
    bottom: '7px',
    color: textDim,
    left: '2px',
    position: 'relative',
};

const rightSpanStyle ={
    bottom: '7px',
    color: textConfirm,
    right: '2px',
    position: 'relative',
};

const BottomNavbar = props =>
    <div style={style}>
        <div onClick={props.closeEditWatchlists}>
            <BackArrowIcon />
            <span style={leftSpanStyle}>cancel</span>
        </div>
        {props.hasSelectedWatchlist && <div>
            <span style={rightSpanStyle}>save</span>
            <CheckMarkIcon />
        </div>}
    </div>;

const mapStateToProps = state => ({
    hasSelectedWatchlist: !_.isEmpty(state.watchlists.selectedWatchlist),
});

const mapDispatchToProps = dispatch => ({
    closeEditWatchlists: () => {
        dispatch(showEditWatchlistsActionCreator(false));
    },
});

const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(BottomNavbar);

export default ConnectedNavbar;
