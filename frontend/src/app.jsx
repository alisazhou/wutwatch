import React from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import { store, client } from './state/store';
import HomePage from './components/HomePage/HomePage';


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


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <HomePage />
                </ApolloProvider>
            </Provider>
        );
    }
}

export default App;
