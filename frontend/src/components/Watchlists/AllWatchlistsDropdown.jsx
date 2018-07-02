import React from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import AllWatchlistsDropdownItem from './AllWatchlistsDropdownItem';
import { background800, backgroundNormal, typographyBody2 } from '../cssConstants';


const style = {
    ...typographyBody2,
    background: background800,
    left: '20px',
    maxHeight: '200px',
    overflowY: 'scroll',
    position: 'absolute',
    top: '63px',
    width: '180px',
    zIndex: 2,
};


const LOAD_WATCHLISTS = gql`{
    allWatchlists {
        edges {
            node {
                id
                name
            }
        }
    }
}`;

class AllWatchlistsDropdown extends React.Component {
    render() {
        return (
            <div style={style}>
                <AllWatchlistsDropdownItem watchlist={{}} />
                {_.map(this.props.watchlists.edges, watchlist =>
                    <AllWatchlistsDropdownItem
                        key={watchlist.node.id}
                        watchlist={watchlist.node}
                    />
                )}
            </div>
        );
    }
}


const QueriedDropdown = () =>
    <Query query={LOAD_WATCHLISTS}>
        {({ data, error, loading }) => {
            if (!error && !loading) {
                return <AllWatchlistsDropdown watchlists={data.allWatchlists} />;
            }
            return null;
        }}
    </Query>;


export default QueriedDropdown;
