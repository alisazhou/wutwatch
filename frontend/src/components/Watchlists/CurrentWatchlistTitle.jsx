import React from 'react';
import { connect } from 'react-redux';

import ToggleWatchlistArrowIcon from './ToggleWatchlistArrowIcon';
import { backgroundLight, backgroundTitle, typographyBody2 } from '../cssConstants';


const style = {
    background: backgroundTitle,
    height: '25px',
    padding: '10px 20px',
    width: '100%',
};

const divStyle = {
    ...typographyBody2,
    background: backgroundLight,
    display: 'inline-block',
    height: '20px',
    padding: '4px 0px 0px 10px',
    position: 'relative',
    top: '-7px',
    width: '170px',
};

const CurrentWatchlistTitle = props =>
    <div style={style}>
        <div style={divStyle}>{props.selectedWatchlist.name || 'all watchlists'}</div>
        <ToggleWatchlistArrowIcon />
    </div>;

const mapStateToProps = state => ({
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const ConnectedTitle = connect(mapStateToProps)(CurrentWatchlistTitle);

export default ConnectedTitle;
