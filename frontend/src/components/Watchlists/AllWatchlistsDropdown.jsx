import React from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';

import AllWatchlistsDropdownItem from './AllWatchlistsDropdownItem';
import { background800, backgroundNormal, typographyBody2 } from '../cssConstants';
import { toggleWatchlistsActionCreator } from '../../state/actions/uiActions';


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
    componentDidMount() {
        window.addEventListener('click', this.props.toggleWatchlists);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.props.toggleWatchlists);
    }

    render() {
        return (
            <div style={style}>
                <AllWatchlistsDropdownItem watchlist={{ id: null }} />
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

const mapDispatchToProps = dispatch => ({
    toggleWatchlists: () => {
        dispatch(toggleWatchlistsActionCreator());
    },
});

const ConnectedDropdown = connect(null, mapDispatchToProps)(AllWatchlistsDropdown);


const QueriedDropdown = () =>
    <Query query={LOAD_WATCHLISTS}>
        {({ data, error, loading }) => {
            if (!error && !loading) {
                return <ConnectedDropdown watchlists={data.allWatchlists} />
            }
            return null;
        }}
    </Query>;


export default QueriedDropdown;
