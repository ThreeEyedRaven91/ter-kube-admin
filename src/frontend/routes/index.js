import React from 'react';

const NamespaceList = React.lazy(() => import('../screens/Namespace/List'));
const PodList = React.lazy(() => import('../screens/Pod/List'));
const DeploymentList = React.lazy(() => import('../screens/Deployment/List'));

const index = [
  { path: '/', exact: true, name: 'TER Kube Admin' },
  { path: '/namespace', exact: true, name: 'Channel', component: NamespaceList },
  { path: '/pod', exact: true, name: 'Pod', component: PodList },
  { path: '/deployment', exact: true, name: 'Deployment', component: DeploymentList },
];

export default index;
