import React from 'react';
import { connect } from 'react-redux';

import { typographyBody2Dim } from '../cssConstants';
import { addingWatchlistActionCreator } from '../../state/actions/uiActions';


const style = {
    ...typographyBody2Dim,
    display: 'inline-block',
    fontStyle: 'italic',
};

class AddWatchlistText extends React.Component {
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
        return (
            <div
                onClick={this.props.showAddWatchlistForm}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={style}
            >
                add new list...
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    showAddWatchlistForm: () => {
        dispatch(addingWatchlistActionCreator(true));
    },
});

const ConnectedText = connect(undefined, mapDispatchToProps)(AddWatchlistText);

export default ConnectedText;
