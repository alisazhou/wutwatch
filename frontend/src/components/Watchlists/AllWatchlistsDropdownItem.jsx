import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { background600 } from '../cssConstants';
import withHover from '../withHover';
import { selectWatchlistActionCreator } from '../../state/actions/watchlistActions';
import { toggleWatchlistsActionCreator } from '../../state/actions/uiActions';


// TODO: make this a function
class AllWatchlistsDropdownItem extends React.Component {
    render() {
        const { watchlist } = this.props;

        const finalStyle = _.clone(this.props.style);
        if (_.isEqual(watchlist, this.props.selectedWatchlist)) {
            finalStyle.fontStyle = 'italic';
        }
        if (this.props.hovering) {
            finalStyle.background = background600;
        }

        return (
            <div
                onClick={() => this.props.selectWatchlist(watchlist)}
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

const WrappedItem = withHover(ConnectedItem);

export default WrappedItem;
