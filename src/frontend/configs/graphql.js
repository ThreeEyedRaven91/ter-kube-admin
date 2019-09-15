import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  // uri: 'http://dev.noticee.me/graphql',
  uri: 'http://localhost:4000/graphql',
});

export default client;
