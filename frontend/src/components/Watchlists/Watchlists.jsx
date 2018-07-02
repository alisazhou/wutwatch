import React from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import AllWatchlistsDropdown from './AllWatchlistsDropdown';
import WatchlistBar from './WatchlistBar';


const GET_CLIENT_CACHE = gql`{
    uiState @client {
        expandedWatchlists
    }
}`;


const Watchlists = props =>
    <div>
        {_.isEmpty(props.searchedMovie) && <WatchlistBar />}
        {props.uiExpandedWatchlists && <AllWatchlistsDropdown />}
    </div>;


const QueriedWatchlists = () =>
    <Query query={GET_CLIENT_CACHE}>
        {({ data, error, loading }) => {
            if (!error && !loading) {
                const uiExpandedWatchlists = data.uiState.expandedWatchlists;
                return <Watchlists uiExpandedWatchlists={uiExpandedWatchlists} />;
            }

            return null;
        }}
    </Query>;


export default QueriedWatchlists;
