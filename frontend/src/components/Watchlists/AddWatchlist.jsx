import React from 'react';
import { connect } from 'react-redux';

import AddWatchlistForm from './AddWatchlistForm';
import AddWatchlistText from './AddWatchlistText';


const style = {
    position: 'relative',
    left: '215px',
    top: '4px',
};

const AddWatchlist = props =>
    <div style={style}>
        {props.addingWatchlist ? <AddWatchlistForm /> : <AddWatchlistText />}
    </div>;

const mapStateToProps = state => ({
    addingWatchlist: state.ui.addingWatchlist,
});

const ConnectedAddWatchlist = connect(mapStateToProps)(AddWatchlist);

export default ConnectedAddWatchlist;
