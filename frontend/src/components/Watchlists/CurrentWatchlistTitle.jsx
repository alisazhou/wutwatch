import React from 'react';
import { connect } from 'react-redux';

import ToggleWatchlistArrowIcon from './ToggleWatchlistArrowIcon';
import { background800, backgroundTitle, typographyBody2 } from '../cssConstants';
import { toggleWatchlistsActionCreator } from '../../state/actions/uiActions';


const divStyle = {
    ...typographyBody2,
    background: background800,
    display: 'inline-block',
    height: '20px',
    overflowX: 'hidden',
    padding: '4px 0px 0px 10px',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '170px',
};

const CurrentWatchlistTitle = props =>
    <div>
        <div onClick={props.toggleWatchlists} style={divStyle}>
            {props.selectedWatchlist.name || 'all watchlists'}
        </div>
        <ToggleWatchlistArrowIcon />
    </div>;

const mapStateToProps = state => ({
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    toggleWatchlists: e => {
        e.stopPropagation(); // AllWatchListDropdown adds a window onClick listener on mount
        dispatch(toggleWatchlistsActionCreator());
    },
})

const ConnectedTitle = connect(mapStateToProps, mapDispatchToProps)(CurrentWatchlistTitle);

export default ConnectedTitle;
