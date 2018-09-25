import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import _ from 'lodash';

import ToggleWatchlistArrowIcon from './ToggleWatchlistArrowIcon';
import { background800, backgroundTitle, typographyBody2 } from '../cssConstants';


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


const GET_CLIENT_CACHE = gql`{
    selectedWatchlist @client {
        name
    }
    uiState @client {
        expandedWatchlists
    }
}`;

const CurrentWatchlistTitle = props =>
    <div>
        <div onClick={props.toggleWatchlists} style={divStyle}>
            {props.selectedWatchlistName || 'all watchlists'}
        </div>
        <ToggleWatchlistArrowIcon />
    </div>;


const QueriedTitle = () =>
    <Query query={GET_CLIENT_CACHE}>
        {({ client, data, error, loading }) => {
            if (!error && !loading) {
                const uiExpandedWatchlists = data.uiState.expandedWatchlist;
                const toggleWatchlists = () => {
                    client.writeData({
                        data: {
                            uiState: _.assign({}, data.uiState, { expandedWatchlists: !uiExpandedWatchlists }),
                        },
                    });
                };

                return <CurrentWatchlistTitle
                    selectedWatchlistName={data.selectedWatchlist.name}
                    toggleWatchlists={toggleWatchlists}
                />;
            }

            return null;
        }}
    </Query>

export default QueriedTitle;
