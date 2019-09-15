import gql from 'graphql-tag';

const get = gql`
  query getDeployment($namespace: String, $dashboard: String) {
    deployments(namespace: $namespace, dashboard: $dashboard) {
      id
      metadata {
        name
        namespace
        creationTimestamp
      }
      spec {
        replicas
      }
      status {
        readyReplicas
      }
    }
  }
`;

export default {
  get,
};
