import Kube from "../../kube-cmd";
import {DashboardRepository} from "../../repositories";

const resolver = {
  deployments: (_, { namespace, dashboard }) => {
    return Kube.deployment.get({
      namespace,
      kubeconfig: DashboardRepository.getPathByTitle(dashboard),
    });
  },
};

const schema = `
deployments(namespace: String, dashboard: String): [Deployment]
`;

export default {
  resolver,
  schema,
};
