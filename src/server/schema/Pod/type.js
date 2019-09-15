const resolver = {
  Pod: {
    name: (namespace) => {
      return namespace.metadata.name;
    },
    id: (namespace) => {
      return namespace.metadata.uid;
    },
    status: (namespace) => {
      return namespace.status.phase;
    },
    createdAt: (namespace) => {
      return namespace.metadata.creationTimestamp;
    },
  }
};

const schema = `
type Pod {
  id: String
  name: String
  status: String
  createdAt: String
  metadata: Metadata
  spec: Spec
}
`;

export default {
  resolver,
  schema,
};
