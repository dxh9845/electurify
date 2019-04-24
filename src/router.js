import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Role from './views/Roles.vue';
import SideNavbar from './components/Navigation/SideNavbar.vue';
import SidebarPanel from './components/Navigation/SidebarPanel.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Role,
      },
    },
    {
      path: '/roles/:roleProp/',
      name: 'roles',
      components: {
        default: Home,
        sidebar: SideNavbar,
      },
      props: { default: true, sidebar: false },
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
