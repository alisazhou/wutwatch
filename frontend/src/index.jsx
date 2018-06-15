import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import App from './app';


const client = new ApolloClient({
  uri: '/graphql/',
  opts: {
    credentials: 'same-origin',
  },
});
client.query({
  query: gql`
    {
      allProfiles {
        edges {
          node {
            user {
              email
            }
          }
        }
      }
    }
  `
}).then(result => {
  console.log(result);
}).catch(err => {
  console.log('goddammit');
});

ReactDOM.render(
    <App />,
    document.getElementById('reactApp')
);
