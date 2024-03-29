const resolver = {
  Pod: {
    id: (namespace) => {
      return namespace.metadata.uid;
    },
  }
};

const schema = `
type Pod {
  id: String
  metadata: Metadata
  spec: Spec
  status: Status
}
`;

export default {
  resolver,
  schema,
};
