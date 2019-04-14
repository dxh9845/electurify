import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SideNavbar from './components/Navigation/SideNavbar.vue';
import KnowledgePane from './components/Navigation/KnowledgePane.vue';

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
      children: [{
        path: 'knowledge',
        component: KnowledgePane,
      }],
    },
  ],
});
