import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/Home.vue';
import RolesView from './views/Roles.vue';
import SidebarPanel from './components/Navigation/SidebarPanel.vue';
import SideNavbar from './components/Navigation/SideNavbar.vue';
import Error from './views/Error.vue';

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: '/roles',
      name: 'roles',
      component: RolesView,
    },
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        sidebar: SideNavbar,
      },
      children: [
        {
          path: 'knowledge',
          props: {
            title: 'Knowledge panel',
            contentComponent: () => import('./components/Panels/KnowledgePanel.vue'),
          },
          component: SidebarPanel,
        },
        {
          path: 'settings',
          props: {
            title: 'Settings',
            contentComponent: () => import('./components/Panels/SettingsPanel.vue'),
          },
          component: SidebarPanel,
        },
        {
          path: 'context',
          props: {
            title: 'Configure context',
            contentComponent: () => import('./components/Panels/ContextPanel.vue'),
          },
          component: SidebarPanel,
        },
      ],
    },
  ],
});

routes.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ path: '/roles' });
  } else {
    next();
  }
});

export default routes;
