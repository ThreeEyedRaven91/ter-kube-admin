import Helper from "../helper";

const get = ({ namespace, kubeconfig }) => {
  const output = Helper.kubectl('get deployments', {
    namespace,
    kubeconfig,
  });
  return JSON.parse(output.stdout).items;
};

const deployment = {
  get,
};

export default deployment;