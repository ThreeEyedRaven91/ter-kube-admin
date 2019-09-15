const resolver = {
  Spec: {

  }
};

const schema = `
type Status {
  phase: String
  readyReplicas: Int
}
`;

export default {
  resolver,
  schema,
};
