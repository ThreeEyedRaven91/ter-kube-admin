import gql from 'graphql-tag';

const get = gql`
  query getDashboards {
    dashboards {
      title
      defaultConfig
      configPath
    }
  }
`;

export default {
  get,
};
