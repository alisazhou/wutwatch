import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { backgroundTitle, background800, typographyBody2 } from '../cssConstants';
import { createWatchlistActionCreator } from '../../state/actions/watchlistActions';
import { addingWatchlistActionCreator } from '../../state/actions/uiActions';


const style = {
    ...typographyBody2,
    background: 'rgba(0, 0, 0, 0)',
    border: 'none',
    borderBottom: '1px dotted',
    borderBottomColor: background800,
    fontStyle: 'italic',
    left: '215px',
    outline: 'none',
    position: 'relative',
    top: '4px',
    width: 'fit-content',
};


const ADD_WATCHLIST = gql`
    mutation createWatchlist($name: String!) {
        createWatchlist(name: $name) {
            watchlist {
                id
                name
                watchers {
                    edges {
                        node {
                            user {
                                id
                                email
                            }
                        }
                    }
                }
            }
        }
    }
`;

const AddWatchlistForm = props => {
    let input;

    const handleSubmit = (e, mutate) => {
        e.preventDefault();
        mutate({ variables: { name: input.value } });
        input.value = '';
        // TODO: once created, select the newly created watchlist
    }

    return (
        <Mutation mutation={ADD_WATCHLIST}>
            {(createWatchlist, { data }) =>
                <form onSubmit={e => handleSubmit(e, createWatchlist)}>
                    <input
                        style={style}
                        placeholder="add new watchlist..."
                        ref={node => {
                            input = node;
                        }}
                    />
                </form>
            }
        </Mutation>
    );
}


export default AddWatchlistForm;
