import React from 'react';
import { connect } from 'react-redux';

import { backgroundFaint, typographySubtitle } from '../cssConstants';
import { showLoginTabActionCreator } from '../../state/actions/uiActions';


const style = {
    height: '35px',
    margin: '0px -10px 30px -10px',
};

const tabStyle = {
    ...typographySubtitle,
    cursor: 'pointer',
    display: 'inline-block',
    height: '100%',
    paddingTop: '15px',
    textAlign: 'center',
    width: '50%',
};

const FormTabs = props => {
    const faintTabStyle = { ...tabStyle, background: backgroundFaint };
    const loginTabStyle = props.showingLoginTab ? tabStyle : faintTabStyle;
    const signUpTabStyle = props.showingLoginTab ? faintTabStyle : tabStyle;

    return (
        <div style={style}>
            <div onClick={() => props.showLoginTab(true)} style={loginTabStyle}>I have an account</div>
            <div onClick={() => props.showLoginTab(false)} style={signUpTabStyle}>First time?</div>
        </div>
    );
};

const mapStateToProps = state => ({
    showingLoginTab: state.ui.showingLoginTab,
});

const mapDispatchToProps = dispatch => ({
    showLoginTab: clickedLoginTab => {
        dispatch(showLoginTabActionCreator(clickedLoginTab));
    },
});

const ConnectedTabs = connect(mapStateToProps, mapDispatchToProps)(FormTabs);

export default ConnectedTabs;
