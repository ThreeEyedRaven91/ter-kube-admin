import gql from './gql';
import graphql from '../../configs/graphql';

const get = ({ namespace, dashboard }) => graphql.query({
  query: gql.get,
  variables: {
    namespace,
    dashboard,
  },
  fetchPolicy: 'network-only',
});

export default {
  get,
};
