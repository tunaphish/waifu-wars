import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

//Redux 
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

//GraphQL
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const link = new HttpLink({ uri: 'https://graphql.anilist.co'});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
  ,
  document.getElementById('root')
);