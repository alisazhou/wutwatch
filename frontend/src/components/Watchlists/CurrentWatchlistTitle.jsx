import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
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


const GET_SELECTED_WATCHLIST_NAME = gql`{
    selectedWatchlist @client {
        name
    }
}`;

const CurrentWatchlistTitle = props =>
    <div>
        <div onClick={props.toggleWatchlists} style={divStyle}>
            {props.selectedWatchlistName || 'all watchlists'}
        </div>
        <ToggleWatchlistArrowIcon />
    </div>;

const mapDispatchToProps = dispatch => ({
    toggleWatchlists: e => {
        e.stopPropagation(); // AllWatchListDropdown adds a window onClick listener on mount
        dispatch(toggleWatchlistsActionCreator());
    },
})

const ConnectedTitle = connect(null, mapDispatchToProps)(CurrentWatchlistTitle);


const QueriedTitle = () =>
    <Query query={GET_SELECTED_WATCHLIST_NAME}>
        {({ data, error, loading }) => {
            if (!error && !loading) {
                return <ConnectedTitle selectedWatchlistName={data.selectedWatchlist.name} />;
            }

            return null;
        }}
    </Query>

export default QueriedTitle;
