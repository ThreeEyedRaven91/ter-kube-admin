import gql from './gql';
import graphql from '../../configs/graphql';

const get = ({ dashboard }) => graphql.query({
  query: gql.get,
  variables: {
    dashboard
  },
  fetchPolicy: 'network-only',
});

export default {
  get,
};
