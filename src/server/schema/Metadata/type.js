const resolver = {
  Metadata: {
    id: (metadata) => {
      return metadata.uid;
    },
  }
};

const schema = `
type Metadata {
  creationTimestamp: String
  generateName: String
  name: String
  namespace: String
  resourceVersion: String
  selfLink: String
  uid: String
  id: String
}
`;

export default {
  resolver,
  schema,
};
