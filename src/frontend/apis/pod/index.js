import gql from './gql';
import graphql from '../../configs/graphql';

const get = ({ namespace, allNamespaces, dashboard }) => graphql.query({
  query: gql.get,
  variables: {
    namespace,
    allNamespaces,
    dashboard,
  },
  fetchPolicy: 'network-only',
});

export default {
  get,
};
