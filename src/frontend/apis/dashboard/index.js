import gql from './gql';
import graphql from '../../configs/graphql';

const get = () => graphql.query({
  query: gql.get,
  fetchPolicy: 'network-only',
});

export default {
  get,
};
