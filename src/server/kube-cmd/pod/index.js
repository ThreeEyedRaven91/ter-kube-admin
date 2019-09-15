import Helper from "../helper";

const get = ({ namespace, allNamespaces, kubeconfig }) => {
  const output = Helper.kubectl('get pods', {
    namespace,
    allNamespaces,
    kubeconfig,
  });
  return JSON.parse(output.stdout).items;
};

const namespace = {
  get,
};

export default namespace;