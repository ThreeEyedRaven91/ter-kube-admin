import gql from 'graphql-tag';

const get = gql`
  query getNamespaces($dashboard: String) {
    namespaces(dashboard: $dashboard) {
      id
      metadata {
        id
        creationTimestamp
        generateName
        name
        resourceVersion
        selfLink
        uid
      }
    }
  }
`;

export default {
  get,
};
