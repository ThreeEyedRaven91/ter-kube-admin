import Kube from "../../kube-cmd";
import { DashboardRepository } from '../../repositories';

const resolver = {
  namespaces: (_, { dashboard }) => {
    return Kube.namespace.get({
      kubeconfig: DashboardRepository.getPathByTitle(dashboard),
    });
  },
};

const schema = `
namespaces(dashboard: String): [Namespace]
`;

export default {
  resolver,
  schema,
};
