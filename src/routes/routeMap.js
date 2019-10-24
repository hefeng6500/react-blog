import React from 'react';
import Loadable from 'react-loadable';

//通用的过场组件
const loadingComponent = () => {
  return <div></div>;
};

const routes = [
  {
    path: '/',
    name: 'default',
    auth: false,
    component: Loadable ({
      loader: () => import ('../pages/home/index.js'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  {
    path: '/index',
    name: 'index',
    auth: false,
    component: Loadable ({
      loader: () => import ('../pages/home/index.js'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  {
    path: '/specialColumn',
    name: 'specialColumn',
    auth: false,
    component: Loadable ({
      loader: () => import ('../pages/specialColumn/index.js'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  {
    path: '/literature',
    name: 'literature',
    auth: false,
    component: Loadable ({
      loader: () => import ('../pages/literature/index.js'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  {
    path: '/article/:id',
    name: 'article',
    auth: false,
    component: Loadable ({
      loader: () => import ('../pages/article/index.js'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  {
    path: '/login',
    name: 'login',
    component: Loadable ({
      loader: () => import ('../pages/user/login'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  {
    path: '/test',
    name: 'test',
    component: Loadable ({
      loader: () => import ('../pages/test/index.js'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  {
    path: '/testRedux',
    name: 'testRedux',
    component: Loadable ({
      loader: () => import ('../pages/testRedux'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  {
    path: '/addArticle',
    name: 'addArticle',
    auth: true,
    component: Loadable ({
      loader: () => import ('../pages/addArticle/index.js'),
      loading: loadingComponent,
      delay: 300,
    }),
  },
];

export default routes;
