import React from 'react';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import SelectedMovie from './SelectedMovie';
import Navbar from '../Navbar/Navbar';


const style = {
    color: '#ffffff',
};

class HomePage extends React.Component {

    render() {
        return (
            <div style={style}>
                <Navbar />
                {this.props.justPicked ? <SelectedMovie /> : <Dashboard />}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    justPicked: state.movies.justPicked,
});

const ConnectedPage = connect(mapStateToProps)(HomePage);

export default ConnectedPage;
