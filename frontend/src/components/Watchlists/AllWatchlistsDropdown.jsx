import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import AllWatchlistsDropdownItem from './AllWatchlistsDropdownItem';
import { background800, backgroundNormal, typographyBody2 } from '../cssConstants';


const style = {
    ...typographyBody2,
    background: background800,
    left: '20px',
    maxHeight: '200px',
    overflowY: 'scroll',
    position: 'absolute',
    top: '69px',
    width: '180px',
};

const divStyle = {
    height: '20px',
    overflowX: 'hidden',
    padding: '4px 0px 0px 10px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};

const AllWatchlistsDropdown = props => {
    if (!props.expandedWatchlists) {
        return null;
    }

    return (
        <div style={style}>
            <AllWatchlistsDropdownItem watchlist={{}} style={divStyle} />
            {_.map(props.watchlists, watchlist =>
                <AllWatchlistsDropdownItem
                    key={watchlist.id}
                    watchlist={watchlist}
                    style={divStyle}
                />
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    expandedWatchlists: state.ui.expandedWatchlists,
    watchlists: state.watchlists.watchlists,
});

const ConnectedDropdown = connect(mapStateToProps)(AllWatchlistsDropdown);


export default ConnectedDropdown;
