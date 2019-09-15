const resolver = {
  Namespace: {
    name: (namespace) => {
      return namespace.metadata.name;
    },
    status: (namespace) => {
      return namespace.status.phase;
    },
    createdAt: (namespace) => {
      return namespace.metadata.creationTimestamp;
    },
    id: (namespace) => {
      return namespace.metadata.uid;
    },
  }
};

const schema = `
type Namespace {
  id: String
  name: String
  status: String
  createdAt: String
  metadata: Metadata
}
`;

export default {
  resolver,
  schema,
};
