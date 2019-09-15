import Kube from "../kube-cmd";

const get = () => {
  return Kube.namespace.get();
}

const NamespaceRepository = {
  get,
};

export default NamespaceRepository;