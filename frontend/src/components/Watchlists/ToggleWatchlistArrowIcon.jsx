import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import IconWrapper from '../IconWrapper';
import { backgroundNormal } from '../cssConstants';


const RightArrowSVG = () =>
    <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
        <path d="M0-.25h24v24H0z" fill="none"/>
    </svg>;

const RightArrowIcon = () =>
    <IconWrapper>
        <RightArrowSVG />
    </IconWrapper>;


const DownArrowSVG = () =>
    <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
        <path d="M0-.75h24v24H0z" fill="none"/>
    </svg>;

const DownArrowIcon = () =>
    <IconWrapper>
        <DownArrowSVG />
    </IconWrapper>;


const style = {
    background: backgroundNormal,
    display: 'inline-block',
    height: '24px',
    position: 'absolute',
    left: '200px',
};


const GET_CLIENT_CACHE = gql`{
    uiExpandedWatchlists @client
}`;

const ToggleWatchlistArrowIcon = props =>
    <div onClick={props.clickHandler} style={style}>
        {props.uiExpandedWatchlists ? <DownArrowIcon /> : <RightArrowIcon />}
    </div>;


const QueriedArrowIcon = () =>
    <Query query={GET_CLIENT_CACHE}>
        {({ client, data, error, loading }) => {
            if (!error && !loading) {
                const clickHandler = () => {
                    client.writeData({
                        data: { uiExpandedWatchlists: !data.uiExpandedWatchlists },
                    });
                };

                return <ToggleWatchlistArrowIcon
                    clickHandler={clickHandler}
                    uiExpandedWatchlists={data.uiExpandedWatchlists}
                />;
            }

            return null;
        }}
    </Query>;


export default QueriedArrowIcon;
