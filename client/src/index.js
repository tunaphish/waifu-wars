import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

//GraphQL
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';

const link = new HttpLink({ uri: 'https://graphql.anilist.co'});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App /> 
  </ApolloProvider>
  ,
  document.getElementById('root')
);