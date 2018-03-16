import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


const CurrentWatchersList = props => {
    const currentWatcherProfiles = _.filter(props.profiles, profile =>
        _.includes(props.watchers, profile.id)
    );

    return <ul>
        {_.map(currentWatcherProfiles, profile =>
            <li key={profile.id}>
                {profile.full_name}, {profile.email}
            </li>
        )}
    </ul>;
};


const mapStateToProps = state => ({
    profiles: state.profiles.profiles,
    watchers: state.watchlists.selectedWatchlist.watchers,
});

const ConnectedList = connect(mapStateToProps)(CurrentWatchersList);


export default ConnectedList;
