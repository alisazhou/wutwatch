import React from 'react';
import _ from 'lodash';
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
};

const divStyle = {
    height: '20px',
    overflowX: 'hidden',
    padding: '4px 0px 0px 10px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};

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
                <AllWatchlistsDropdownItem watchlist={{}} style={divStyle} />
                {_.map(this.props.watchlists, watchlist =>
                    <AllWatchlistsDropdownItem
                        key={watchlist.id}
                        watchlist={watchlist}
                        style={divStyle}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    watchlists: state.watchlists.watchlists,
});

const mapDispatchToProps = dispatch => ({
    toggleWatchlists: () => {
        dispatch(toggleWatchlistsActionCreator());
    },
});

const ConnectedDropdown = connect(mapStateToProps, mapDispatchToProps)(AllWatchlistsDropdown);


export default ConnectedDropdown;
