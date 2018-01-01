import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { background600 } from '../cssConstants';
import { selectWatchlistActionCreator } from '../../state/actions/watchlistActions';
import { toggleWatchlistsActionCreator } from '../../state/actions/uiActions';


class AllWatchlistsDropdownItem extends React.Component {
    state = {
        hovering: false,
    };

    handleMouseEnter = () => {
        this.setState({ hovering: true });
    };

    handleMouseLeave = () => {
        this.setState({ hovering: false });
    };

    render() {
        const { watchlist } = this.props;

        const finalStyle = _.clone(this.props.style);
        if (_.isEqual(watchlist, this.props.selectedWatchlist)) {
            finalStyle.fontStyle = 'italic';
        }
        if (this.state.hovering) {
            finalStyle.background = background600;
        }

        return (
            <div
                onClick={() => this.props.selectWatchlist(watchlist)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={finalStyle}
            >
                {watchlist.name || 'all watchlists'}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedWatchlist: state.watchlists.selectedWatchlist,
});

const mapDispatchToProps = dispatch => ({
    selectWatchlist: watchlistId => {
        dispatch(selectWatchlistActionCreator(watchlistId));
    },
    toggleWatchlists: () => {
        dispatch(toggleWatchlistsActionCreator());
    },
});

const ConnectedItem = connect(mapStateToProps, mapDispatchToProps)(AllWatchlistsDropdownItem);

export default ConnectedItem;
