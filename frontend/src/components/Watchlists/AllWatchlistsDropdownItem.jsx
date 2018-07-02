import React from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { background600 } from '../cssConstants';
import withHover from '../withHover';


const style = {
    height: '20px',
    overflowX: 'hidden',
    padding: '4px 0px 0px 10px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};


const GET_SELECTED_WATCHLIST = gql`{
    selectedWatchlist @client {
        name
    }
    uiExpandedWatchlists @client
}`;


class AllWatchlistsDropdownItem extends React.Component {
    onClick = () => {
        this.props.clickHandler(this.props.watchlist);
    }

    render() {
        const finalStyle = _.clone(style);
        if (this.props.watchlist.name === this.props.selectedWatchlistName ||
            (_.isEmpty(this.props.watchlist) && !this.props.selectedWatchlistName)) {
            finalStyle.fontStyle = 'italic';
        }
        if (this.props.hovering) {
            finalStyle.background = background600;
        }

        return (
            <div onClick={this.onClick} style={finalStyle}>
                {this.props.watchlist.name || 'all watchlists'}
            </div>
        );
    }
}

const ApolloItem = props =>
    <Query query={GET_SELECTED_WATCHLIST}>
        {({ client, data, error, loading }) => {
            if (!error && !loading) {
                const clickHandler = watchlist => {
                    client.writeData({
                        data: {
                            selectedWatchlist: watchlist,
                            uiExpandedWatchlists: !data.uiExpandedWatchlists,
                        },
                    });
                };

                return (
                    <AllWatchlistsDropdownItem
                        selectedWatchlistName={data.selectedWatchlist.name}
                        clickHandler={clickHandler}
                        {...props}
                    />
                );
            }

            return null;
        }}
    </Query>

export default withHover(ApolloItem);
