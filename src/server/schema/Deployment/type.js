const resolver = {
  Deployment: {
    id: (namespace) => {
      return namespace.metadata.uid;
    },
  }
};

const schema = `
type Deployment {
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
