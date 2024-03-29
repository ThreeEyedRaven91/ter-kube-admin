import gql from 'graphql-tag';

const get = gql`
  query getPods($namespace: String, $allNamespaces: Boolean, $dashboard: String) {
    pods(namespace: $namespace, allNamespaces: $allNamespaces, dashboard: $dashboard) {
      id
      metadata {
        name
        namespace
        creationTimestamp
      }
      spec {
        nodeName
      }
      status {
        phase
      }
    }
  }
`;

export default {
  get,
};
