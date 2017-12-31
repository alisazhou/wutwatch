import React from 'react';
import { connect } from 'react-redux';

import { showLoginTabActionCreator } from '../../state/actions/uiActions';


const FormTabs = props =>
    <div>
        <span onClick={() => props.showLoginTab(true)}>I have an account</span>
        <span onClick={() => props.showLoginTab(false)}>First time?</span>
    </div>;

const mapDispatchToProps = dispatch => ({
    showLoginTab: clickedLoginTab => {
        dispatch(showLoginTabActionCreator(clickedLoginTab));
    },
});

const ConnectedTabs = connect(undefined, mapDispatchToProps)(FormTabs);

export default ConnectedTabs;
