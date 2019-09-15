let listeners = [];
let filters = {
  allNamespaces: true,
  dashboard: undefined,
};

const addListener = (l) => {
  listeners.push(l);
  return removeListener(l);
};

const removeListener = (l) => () => {
  listeners = listeners.filter(_l => _l !== l);
};

const setFilters = (key, value) => {
  if (value === undefined) {
    delete filters[key];
  } else {
    filters[key] = value;
  }
  listeners.map(l => l());
};

const getFilters = () => filters;

const ConfigFilter = {
  addListener,
  setFilters,
  getFilters,
};

export default ConfigFilter;