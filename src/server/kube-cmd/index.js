import deployment from './deployment';
import namespace from "./namespace";
import pod from './pod';


const Kube = {
  deployment,
  namespace,
  pod,
};

export default Kube;