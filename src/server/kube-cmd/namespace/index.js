import Helper from "../helper";

const get = ({ kubeconfig }) => {
  const output = Helper.kubectl('get namespace', {
    kubeconfig,
  });
  return JSON.parse(output.stdout).items;
};

const namespace = {
  get,
};

export default namespace;