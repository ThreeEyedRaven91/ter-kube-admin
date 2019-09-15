import Kube from "../../kube-cmd";
import {DashboardRepository} from "../../repositories";

const resolver = {
  pods: (_, { namespace, allNamespaces, dashboard }) => {
    return Kube.pod.get({
      namespace,
      allNamespaces,
      kubeconfig: DashboardRepository.getPathByTitle(dashboard),
    });
  },
};

const schema = `
pods(namespace: String, allNamespaces: Boolean, dashboard: String): [Pod]
`;

export default {
  resolver,
  schema,
};
