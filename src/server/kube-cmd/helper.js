import shell from 'shelljs';
import lodash from 'lodash';

const kubectl = (cmd, longOptions = {}, shortOptions = {}) => {
  longOptions.output = 'json';

  const longOptionString = Object.keys(longOptions).reduce((total, key) => {
    if (longOptions[key] !== undefined) {
      const convertedKey = lodash.snakeCase(key).replace('_', '-');
      total.push(`--${convertedKey}=${longOptions[key]}`);
    }
    return total;
  }, []).join(' ');

  const shortOptionString = Object.keys(shortOptions).reduce((total, key) => {
    if (shortOptions[key] !== undefined) {
      total.push(`-${key}=${shortOptions[key]}`);
    }
    return total;
  }, []).join(' ');

  const queryString = `kubectl ${cmd} ${longOptionString} ${shortOptionString}`;
  console.log(queryString);

  shell.config.silent = true;
  return shell.exec(queryString);
}

const Helper = {
  kubectl,
};

export default Helper;