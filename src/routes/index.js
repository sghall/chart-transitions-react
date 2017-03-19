// @flow weak
/* eslint global-require: 0 */

import Home from './Home';
import AppFrame from '../components/AppFrame';

import SurfaceDocs from './documentation/Surface';
import NodeGroupDocs from './documentation/NodeGroup';
import TickGroupDocs from './documentation/TickGroup';

const docContext = require.context('!raw-loader!./documentation', true);

import store, { injectReducer } from '../store';

const routes = {
  path: '/',
  title: 'Material Charts',
  component: AppFrame,
  indexRoute: {
    title: null,
    component: Home,
    dockDrawer: true,
  },
  childRoutes: [
    {
      path: 'examples',
      indexRoute: {
        onEnter(nextState, replace) {
          replace('/examples/alphabet');
        },
      },
      childRoutes: [
        require('./examples/alphabet').default(store, injectReducer),
        require('./examples/statesByAge').default(store, injectReducer),
        require('./examples/packedByAge').default(store, injectReducer),
        require('./examples/stackedArea').default(store, injectReducer),
        require('./examples/alluvialChart').default(store, injectReducer),
      ],
    },
  ],
};

export default routes;
