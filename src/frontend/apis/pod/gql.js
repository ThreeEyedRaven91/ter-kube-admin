import gql from 'graphql-tag';

const get = gql`
  query getPods($namespace: String, $allNamespaces: Boolean, $dashboard: String) {
    pods(namespace: $namespace, allNamespaces: $allNamespaces, dashboard: $dashboard) {
      id
      name
      status
      createdAt
      metadata {
        name
        namespace
      }
      spec {
        nodeName
      }
    }
  }
`;

export default {
  get,
};
