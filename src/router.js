import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SideNavbar from './components/Navigation/SideNavbar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        sidebar: SideNavbar,
      },
      children: [
        {
          path: 'knowledge',
          props: {
            title: 'Knowledge panel',
            contentComponent: () => import('./components/Panels/KnowledgePanel.vue'),
          },
          component: () => import('./components/Navigation/SidebarPanel.vue'),
        },
        {
          path: 'settings',
          props: {
            title: 'Settings',
            contentComponent: () => import('./components/Panels/SettingsPanel.vue'),
          },
          component: () => import('./components/Navigation/SidebarPanel.vue'),
        },
      ],
    },
  ],
});
