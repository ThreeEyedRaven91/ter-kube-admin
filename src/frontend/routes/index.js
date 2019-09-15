import React from 'react';

const NamespaceList = React.lazy(() => import('../screens/Namespace/List'));
const PodList = React.lazy(() => import('../screens/Pod/List'));

const index = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/namespace', exact: true, name: 'Channel', component: NamespaceList },
  { path: '/pod', exact: true, name: 'Pod', component: PodList },
];

export default index;
