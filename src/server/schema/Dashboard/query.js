import {DashboardRepository} from "../../repositories";

const resolver = {
  dashboards: () => {
    return DashboardRepository.get();
  }
};

const schema = `
dashboards: [Dashboard]
`;

export default {
  resolver,
  schema,
};
