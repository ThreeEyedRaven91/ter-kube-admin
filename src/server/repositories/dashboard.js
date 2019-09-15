import os from 'os';
import fs from 'fs';
import path from 'path';

const get = () => {
  try {
    const homedir = os.homedir();
    const configPath = path.join(homedir, '.ter/kube-admin/config.json');
    const dashboards = JSON.parse(fs.readFileSync(configPath));

    return dashboards;
  }
  catch (error) {
    return [];
  }
};

const getPathByTitle = (title) => {
  const dashboards = get();
  const dashboard = dashboards.find(dashboard => dashboard.title === title);
  if (dashboard) {
    return dashboard.configPath;
  }

  return undefined;
};

const NamespaceRepository = {
  get,
  getPathByTitle,
};

export default NamespaceRepository;