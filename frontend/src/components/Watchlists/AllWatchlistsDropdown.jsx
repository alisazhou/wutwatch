import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { backgroundLight, typographyBody2 } from '../cssConstants';
import { selectWatchlistActionCreator } from '../../state/actions/watchlistActions';
import { toggleWatchlistsActionCreator } from '../../state/actions/uiActions';


const style = {
    ...typographyBody2,
    background: backgroundLight,
    left: '20px',
    maxHeight: '200px',
    overflowY: 'scroll',
    paddingLeft: '10px',
    position: 'absolute',
    top: '69px',
    width: '170px',
};

const divStyle = {
    height: '20px',
    overflowX: 'hidden',
    paddingTop: '4px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};

const AllWatchlistsDropdown = props => {
    if (!props.expandedWatchlists) {
        return null;
    }

    const handleClick = watchlist => {
        props.selectWatchlist(watchlist);
        props.toggleWatchlists();
    };

    return (
        <div style={style}>
            {_.map(props.watchlists, watchlist =>
                <div key={watchlist.id} onClick={() => handleClick(watchlist)} style={divStyle}>
                    {watchlist.name}
                </div>
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    expandedWatchlists: state.ui.expandedWatchlists,
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    selectWatchlist: watchlistId => {
        dispatch(selectWatchlistActionCreator(watchlistId));
    },
    toggleWatchlists: () => {
        dispatch(toggleWatchlistsActionCreator());
    },
});

const ConnectedDropdown = connect(mapStateToProps, mapDispatchToProps)(AllWatchlistsDropdown);


export default ConnectedDropdown;
